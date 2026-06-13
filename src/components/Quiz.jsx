import { useMemo, useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import { MathText } from '../lib/mathText.jsx'
import { themeByKey } from '../data/themes.js'
import { Figure, FIGURE_FOR_ID } from '../lib/figures.jsx'
import { STR } from '../lib/i18n.js'
import { mailtoResults } from '../lib/stats.js'

const DIFFC = { 1: '#16a34a', 2: '#d97706', 3: '#dc2626' }
const MAX_REPEAT = 2 // une question ratée revient au maximum 2 fois

function numEqual(a, b) {
  const x = parseFloat(String(a).replace(',', '.'))
  return !Number.isNaN(x) && Math.abs(x - b) < 1e-6
}

export default function Quiz({ session, lang, progress, onFinish, onHome }) {
  const t = STR[lang]
  const baseTotal = useMemo(() => session.list.length, [session])
  const [queue, setQueue] = useState(session.list)
  const [pos, setPos] = useState(0)
  const [picked, setPicked] = useState(null)
  const [input, setInput] = useState('')
  const [checked, setChecked] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [done, setDone] = useState(false)
  const resultsRef = useRef([])
  const wrongCountRef = useRef({})

  const q = queue[pos]
  const isNumeric = q?.type === 'numeric'
  const isRepeat = q && (wrongCountRef.current[q.id] || 0) > 0

  const isCorrect = useMemo(() => {
    if (!checked) return false
    if (isNumeric) return numEqual(input, q.answer)
    return picked === q.answer
  }, [checked, picked, input, q, isNumeric])

  const options = lang === 'nl' ? q?.options : (q?.options_fr || q?.options)
  const qtext = lang === 'nl' ? q?.question_nl : (q?.question_fr || q?.question_nl)
  const hint = lang === 'nl' ? (q?.hint_nl || q?.hint_fr) : (q?.hint_fr || q?.hint_nl)
  const explanation = lang === 'nl' ? (q?.explanation_nl || q?.explanation_fr) : (q?.explanation_fr || q?.explanation_nl)

  function check() {
    if (checked) return
    if (isNumeric && input.trim() === '') return
    if (!isNumeric && picked === null) return
    const correct = isNumeric ? numEqual(input, q.answer) : picked === q.answer
    setChecked(true)
    resultsRef.current.push({ id: q.id, correct, difficulty: q.difficulty })
    if (correct) {
      confetti({ particleCount: 45, spread: 55, startVelocity: 30, origin: { y: 0.7 }, scalar: 0.8 })
      setStreak((s) => {
        const ns = s + 1
        setMaxStreak((m) => Math.max(m, ns))
        return ns
      })
    } else {
      setStreak(0)
      // reprise espacée : remettre la question plus loin, 2 fois max
      const wc = wrongCountRef.current[q.id] || 0
      if (wc < MAX_REPEAT) {
        wrongCountRef.current[q.id] = wc + 1
        setQueue((prev) => {
          const nq = [...prev]
          const insertAt = Math.min(pos + 3, nq.length)
          nq.splice(insertAt, 0, q)
          return nq
        })
      }
    }
  }

  function next() {
    if (pos + 1 >= queue.length) {
      const distinctCorrect = new Set(resultsRef.current.filter((r) => r.correct).map((r) => r.id)).size
      onFinish({ perQuestion: resultsRef.current, maxStreak, score: distinctCorrect, total: baseTotal })
      setDone(true)
    } else {
      setPos(pos + 1)
      setPicked(null)
      setInput('')
      setChecked(false)
      setShowHint(false)
    }
  }

  if (done) {
    const distinctCorrect = new Set(resultsRef.current.filter((r) => r.correct).map((r) => r.id)).size
    const pct = Math.round((distinctCorrect / baseTotal) * 100)
    const msg = pct === 100 ? t.perfect : pct >= 70 ? t.great : pct >= 50 ? t.ok : t.revise
    const xpGain = resultsRef.current.reduce((s, r) => s + (r.correct ? r.difficulty * 10 : 0), 0)
    return (
      <div className="result">
        <div className="result-emoji bounce">{pct >= 70 ? '🎉' : '📈'}</div>
        <h2>{session.title}</h2>
        <div className="result-score">{distinctCorrect} / {baseTotal}</div>
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

  return (
    <div className="quiz">
      <div className="quiz-head">
        <button className="link" onClick={onHome}>{t.quit}</button>
        <div className="quiz-progress">
          <div className="quiz-progress-bar"><div style={{ width: `${(pos / queue.length) * 100}%` }} /></div>
          <span>{pos + 1} / {queue.length}</span>
        </div>
        <div className="streak">{streak > 0 ? `🔥 ${streak}` : ''}</div>
      </div>

      <div className="qcard pop" key={`${q.id}-${pos}`}>
        <div className="qmeta">
          <span className="chip" style={{ background: theme?.color }}>{theme?.icon} {q.chapter}</span>
          <span className="chip diff" style={{ borderColor: DIFFC[q.difficulty], color: DIFFC[q.difficulty] }}>{t.diff[q.difficulty]}</span>
          {isRepeat && <span className="chip repeat">🔁 {lang === 'nl' ? 'opnieuw' : 'reprise'}</span>}
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
            <button className="big primary" onClick={next}>{pos + 1 >= queue.length ? t.see_result : t.next}</button>
          )}
        </div>
      </div>
    </div>
  )
}
