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

const DEFAULT_ST = { picked: null, input: '', checked: false, correct: false, showHint: false }

export default function Quiz({ session, lang, progress, course, onFinish, onHome }) {
  const t = STR[lang]
  const baseTotal = useMemo(() => session.list.length, [session])
  const [queue, setQueue] = useState(session.list)
  const [pos, setPos] = useState(0)
  const [states, setStates] = useState({}) // index -> état de la question
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [done, setDone] = useState(false)
  const wrongCountRef = useRef({})
  const committedRef = useRef(false)

  const q = queue[pos]
  const st = states[pos] || DEFAULT_ST
  const isNumeric = q?.type === 'numeric'
  const isRepeat = q && (wrongCountRef.current[q.id] || 0) > 0
  const isLast = pos + 1 >= queue.length

  const options = lang === 'nl' ? q?.options : (q?.options_fr || q?.options)
  // Ordre d'affichage mélangé (pour les QCM) - stable par question, pas pour Juist/Fout.
  const order = useMemo(() => {
    if (!q || !q.options) return []
    const idx = q.options.map((_, i) => i)
    if (q.type !== 'mc') return idx
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[idx[i], idx[j]] = [idx[j], idx[i]]
    }
    return idx
  }, [q?.id, pos])
  const qtext = lang === 'nl' ? q?.question_nl : (q?.question_fr || q?.question_nl)
  const hint = lang === 'nl' ? (q?.hint_nl || q?.hint_fr) : (q?.hint_fr || q?.hint_nl)
  const explanation = lang === 'nl' ? (q?.explanation_nl || q?.explanation_fr) : (q?.explanation_fr || q?.explanation_nl)

  function patch(p) {
    setStates((prev) => ({ ...prev, [pos]: { ...(prev[pos] || DEFAULT_ST), ...p } }))
  }

  function commit() {
    if (committedRef.current) return
    committedRef.current = true
    const perQuestion = []
    queue.forEach((item, idx) => {
      const s = states[idx]
      if (s && s.checked) perQuestion.push({ id: item.id, correct: s.correct, difficulty: item.difficulty })
    })
    const distinctCorrect = new Set(perQuestion.filter((r) => r.correct).map((r) => r.id)).size
    onFinish({ perQuestion, maxStreak, score: distinctCorrect, total: baseTotal })
  }

  function quit() {
    commit()
    onHome()
  }

  function check() {
    if (st.checked) return
    if (isNumeric && String(st.input).trim() === '') return
    if (!isNumeric && st.picked === null) return
    const correct = isNumeric ? numEqual(st.input, q.answer) : st.picked === q.answer
    patch({ checked: true, correct })
    if (correct) {
      confetti({ particleCount: 45, spread: 55, startVelocity: 30, origin: { y: 0.7 }, scalar: 0.8 })
      setStreak((s) => {
        const ns = s + 1
        setMaxStreak((m) => Math.max(m, ns))
        return ns
      })
    } else {
      setStreak(0)
      const wc = wrongCountRef.current[q.id] || 0
      if (wc < MAX_REPEAT) {
        wrongCountRef.current[q.id] = wc + 1
        setQueue((prev) => {
          const nq = [...prev]
          nq.splice(Math.min(pos + 3, nq.length), 0, q)
          return nq
        })
      }
    }
  }

  function next() {
    if (isLast) {
      commit()
      setDone(true)
    } else {
      setPos(pos + 1)
    }
  }

  if (done) {
    const perQuestion = []
    queue.forEach((item, idx) => { const s = states[idx]; if (s && s.checked) perQuestion.push({ id: item.id, correct: s.correct, difficulty: item.difficulty }) })
    const distinctCorrect = new Set(perQuestion.filter((r) => r.correct).map((r) => r.id)).size
    const pct = Math.round((distinctCorrect / baseTotal) * 100)
    const msg = pct === 100 ? t.perfect : pct >= 70 ? t.great : pct >= 50 ? t.ok : t.revise
    const xpGain = perQuestion.reduce((s, r) => s + (r.correct ? r.difficulty * 10 : 0), 0)
    return (
      <div className="result">
        <div className="result-emoji bounce">{pct >= 70 ? '🎉' : '📈'}</div>
        <h2>{session.title}</h2>
        <div className="result-score">{distinctCorrect} / {baseTotal}</div>
        <div className="result-ring" style={{ '--p': pct }}><span>{pct}%</span></div>
        <p className="result-msg">{msg}</p>
        <p className="result-xp">+{xpGain} XP · {t.best_streak} : {maxStreak} 🔥</p>
        <div className="result-actions">
          <a className="big email" href={mailtoResults(progress, lang, course)}>{t.email_btn}</a>
          <button className="big primary" onClick={onHome}>{t.back_home}</button>
        </div>
      </div>
    )
  }

  const theme = themeByKey[q.theme]

  return (
    <div className="quiz">
      <div className="quiz-head">
        <button className="link" onClick={quit}>{t.quit}</button>
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
          st.showHint ? (
            <p className="hint show">💡 {hint}</p>
          ) : (
            <button className="hint-btn" onClick={() => patch({ showHint: true })}>{t.hint_btn}</button>
          )
        ) : null}

        {!isNumeric && (
          <div className="options">
            {order.map((oi) => {
              let cls = 'opt'
              if (st.checked) {
                if (oi === q.answer) cls += ' correct'
                else if (oi === st.picked) cls += ' wrong'
              } else if (oi === st.picked) cls += ' picked'
              return (
                <button key={oi} className={cls} disabled={st.checked} onClick={() => patch({ picked: oi })}>
                  <MathText>{options[oi]}</MathText>
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
              value={st.input}
              disabled={st.checked}
              onChange={(e) => patch({ input: e.target.value })}
              onKeyDown={(e) => e.key === 'Enter' && check()}
              className={st.checked ? (st.correct ? 'correct' : 'wrong') : ''}
            />
            {st.checked && !st.correct && <div className="goodanswer">{t.good_answer} <strong>{q.answer}</strong></div>}
          </div>
        )}

        {st.checked && (
          <div className={`feedback ${st.correct ? 'ok' : 'no'}`}>
            <div className="feedback-title">{st.correct ? t.correct : t.wrong}</div>
            <MathText className="feedback-exp">{explanation}</MathText>
            <div className="feedback-ref">📖 {q.course_ref}</div>
          </div>
        )}

        <div className="qactions">
          <button className="nav-prev" onClick={() => setPos(pos - 1)} disabled={pos === 0}>{t.prev}</button>
          {!st.checked ? (
            <button className="big primary" onClick={check}>{t.check}</button>
          ) : (
            <button className="big primary" onClick={next}>{isLast ? t.see_result : t.next}</button>
          )}
        </div>
      </div>
    </div>
  )
}
