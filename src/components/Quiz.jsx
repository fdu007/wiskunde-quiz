import { useMemo, useState } from 'react'
import confetti from 'canvas-confetti'
import { MathText } from '../lib/mathText.jsx'
import { themeByKey } from '../data/themes.js'
import { Figure, FIGURE_FOR_ID } from '../lib/figures.jsx'
import { STR } from '../lib/i18n.js'
import { mailtoResults } from '../lib/stats.js'

const DIFFC = { 1: '#16a34a', 2: '#d97706', 3: '#dc2626' }

function numEqual(a, b) {
  const x = parseFloat(String(a).replace(',', '.'))
  return !Number.isNaN(x) && Math.abs(x - b) < 1e-6
}

export default function Quiz({ session, lang, progress, onFinish, onHome }) {
  const t = STR[lang]
  const list = session.list
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [input, setInput] = useState('')
  const [checked, setChecked] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [results, setResults] = useState([])
  const [done, setDone] = useState(false)

  const q = list[i]
  const isNumeric = q?.type === 'numeric'

  const isCorrect = useMemo(() => {
    if (!checked) return false
    if (isNumeric) return numEqual(input, q.answer)
    return picked === q.answer
  }, [checked, picked, input, q, isNumeric])

  function getOptions() {
    return lang === 'nl' ? q.options : (q.options_fr || q.options)
  }
  const qtext = lang === 'nl' ? q?.question_nl : (q?.question_fr || q?.question_nl)
  const hint = lang === 'nl' ? (q?.hint_nl ?? q?.hint_fr) : (q?.hint_fr ?? q?.hint_nl)
  const explanation = lang === 'nl' ? (q?.explanation_nl || q?.explanation_fr) : (q?.explanation_fr || q?.explanation_nl)

  function check() {
    if (checked) return
    if (isNumeric && input.trim() === '') return
    if (!isNumeric && picked === null) return
    const correct = isNumeric ? numEqual(input, q.answer) : picked === q.answer
    setChecked(true)
    setResults((r) => [...r, { id: q.id, correct, difficulty: q.difficulty }])
    if (correct) {
      setScore((s) => s + 1)
      confetti({ particleCount: 45, spread: 55, startVelocity: 30, origin: { y: 0.7 }, scalar: 0.8 })
      setStreak((s) => {
        const ns = s + 1
        setMaxStreak((m) => Math.max(m, ns))
        return ns
      })
    } else {
      setStreak(0)
    }
  }

  function next() {
    if (i + 1 >= list.length) {
      onFinish({ perQuestion: results, maxStreak, score, total: list.length })
      setDone(true)
    } else {
      setI(i + 1)
      setPicked(null)
      setInput('')
      setChecked(false)
      setShowHint(false)
    }
  }

  if (done) {
    const pct = Math.round((score / list.length) * 100)
    const msg = pct === 100 ? t.perfect : pct >= 70 ? t.great : pct >= 50 ? t.ok : t.revise
    const xpGain = results.reduce((s, r) => s + (r.correct ? r.difficulty * 10 : 0), 0)
    return (
      <div className="result">
        <div className="result-emoji bounce">{pct >= 70 ? '🎉' : '📈'}</div>
        <h2>{session.title}</h2>
        <div className="result-score">{score} / {list.length}</div>
        <div className="result-ring" style={{ '--p': pct }}><span>{pct}%</span></div>
        <p className="result-msg">{msg}</p>
        <p className="result-xp">+{xpGain} XP · {t.best_streak} : {maxStreak} 🔥</p>
        <div className="result-actions">
          <a className="big email" href={mailtoResults(progress, lang)}>{t.email_btn}</a>
          <button className="big primary" onClick={onHome}>{t.back_home}</button>
        </div>
      </div>
    )
  }

  const theme = themeByKey[q.theme]
  const options = getOptions()

  return (
    <div className="quiz">
      <div className="quiz-head">
        <button className="link" onClick={onHome}>{t.quit}</button>
        <div className="quiz-progress">
          <div className="quiz-progress-bar"><div style={{ width: `${(i / list.length) * 100}%` }} /></div>
          <span>{i + 1} / {list.length}</span>
        </div>
        <div className="streak">{streak > 0 ? `🔥 ${streak}` : ''}</div>
      </div>

      <div className="qcard pop" key={q.id}>
        <div className="qmeta">
          <span className="chip" style={{ background: theme?.color }}>{theme?.icon} {q.chapter}</span>
          <span className="chip diff" style={{ borderColor: DIFFC[q.difficulty], color: DIFFC[q.difficulty] }}>{t.diff[q.difficulty]}</span>
        </div>

        <MathText as="h2" className="qtext">{qtext}</MathText>

        {FIGURE_FOR_ID[q.id] && <Figure id={q.id} />}

        {hint ? (
          showHint ? (
            <p className="hint show">💡 {hint}</p>
          ) : (
            <button className="hint-btn" onClick={() => setShowHint(true)}>{t.hint_btn}</button>
          )
        ) : null}

        {!isNumeric && (
          <div className="options">
            {options.map((opt, idx) => {
              let cls = 'opt'
              if (checked) {
                if (idx === q.answer) cls += ' correct'
                else if (idx === picked) cls += ' wrong'
              } else if (idx === picked) cls += ' picked'
              return (
                <button key={idx} className={cls} disabled={checked} onClick={() => setPicked(idx)}>
                  <MathText>{opt}</MathText>
                </button>
              )
            })}
          </div>
        )}

        {isNumeric && (
          <div className="numeric">
            <input
              type="text"
              inputMode="decimal"
              placeholder={t.your_result}
              value={input}
              disabled={checked}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && check()}
              className={checked ? (isCorrect ? 'correct' : 'wrong') : ''}
            />
            {checked && !isCorrect && <div className="goodanswer">{t.good_answer} <strong>{q.answer}</strong></div>}
          </div>
        )}

        {checked && (
          <div className={`feedback ${isCorrect ? 'ok' : 'no'}`}>
            <div className="feedback-title">{isCorrect ? t.correct : t.wrong}</div>
            <MathText className="feedback-exp">{explanation}</MathText>
            <div className="feedback-ref">📖 {q.course_ref}</div>
          </div>
        )}

        <div className="qactions">
          {!checked ? (
            <button className="big primary" onClick={check}>{t.check}</button>
          ) : (
            <button className="big primary" onClick={next}>{i + 1 >= list.length ? t.see_result : t.next}</button>
          )}
        </div>
      </div>
    </div>
  )
}
