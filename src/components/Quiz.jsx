import { useMemo, useState } from 'react'
import { MathText } from '../lib/mathText.jsx'
import { themeByKey } from '../data/themes.js'

const DIFF = { 1: { t: 'Facile', c: '#16a34a' }, 2: { t: 'Moyen', c: '#d97706' }, 3: { t: 'Difficile', c: '#dc2626' } }

function numEqual(a, b) {
  const x = parseFloat(String(a).replace(',', '.'))
  return !Number.isNaN(x) && Math.abs(x - b) < 1e-6
}

export default function Quiz({ session, onFinish, onHome }) {
  const list = session.list
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null) // index choisi (mc/tf)
  const [input, setInput] = useState('') // numeric
  const [checked, setChecked] = useState(false)
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

  function check() {
    if (checked) return
    if (isNumeric && input.trim() === '') return
    if (!isNumeric && picked === null) return
    const correct = isNumeric ? numEqual(input, q.answer) : picked === q.answer
    setChecked(true)
    setResults((r) => [...r, { id: q.id, correct, difficulty: q.difficulty }])
    if (correct) {
      setScore((s) => s + 1)
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
    }
  }

  if (done) {
    const pct = Math.round((score / list.length) * 100)
    const msg = pct === 100 ? 'Parfait ! 💯' : pct >= 70 ? 'Bien joué ! 👏' : pct >= 50 ? 'Pas mal, continue ! 💪' : 'Révise la fiche et réessaie 📚'
    return (
      <div className="result">
        <div className="result-emoji">{pct >= 70 ? '🎉' : '📈'}</div>
        <h2>{session.title}</h2>
        <div className="result-score">{score} / {list.length}</div>
        <div className="result-ring" style={{ '--p': pct }}><span>{pct}%</span></div>
        <p className="result-msg">{msg}</p>
        <p className="result-xp">+{results.reduce((s, r) => s + (r.correct ? r.difficulty * 10 : 0), 0)} XP · meilleure série : {maxStreak} 🔥</p>
        <div className="result-actions">
          <button className="big primary" onClick={onHome}>Retour à l'accueil</button>
        </div>
      </div>
    )
  }

  const d = DIFF[q.difficulty] || DIFF[1]
  const theme = themeByKey[q.theme]

  return (
    <div className="quiz">
      <div className="quiz-head">
        <button className="link" onClick={onHome}>← Quitter</button>
        <div className="quiz-progress">
          <div className="quiz-progress-bar"><div style={{ width: `${(i / list.length) * 100}%` }} /></div>
          <span>{i + 1} / {list.length}</span>
        </div>
        <div className="streak">{streak > 0 ? `🔥 ${streak}` : ''}</div>
      </div>

      <div className="qcard">
        <div className="qmeta">
          <span className="chip" style={{ background: theme?.color }}>{theme?.icon} {q.chapter}</span>
          <span className="chip diff" style={{ borderColor: d.c, color: d.c }}>{d.t}</span>
        </div>

        <MathText as="h2" className="qtext">{q.question_nl}</MathText>
        {q.hint_fr ? <p className="hint">💡 {q.hint_fr}</p> : null}

        {!isNumeric && (
          <div className="options">
            {q.options.map((opt, idx) => {
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
              placeholder="Ton résultat..."
              value={input}
              disabled={checked}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && check()}
              className={checked ? (isCorrect ? 'correct' : 'wrong') : ''}
            />
            {checked && !isCorrect && <div className="goodanswer">Bonne réponse : <strong>{q.answer}</strong></div>}
          </div>
        )}

        {checked && (
          <div className={`feedback ${isCorrect ? 'ok' : 'no'}`}>
            <div className="feedback-title">{isCorrect ? '✅ Juist !' : '❌ Fout'}</div>
            <MathText className="feedback-exp">{q.explanation_fr}</MathText>
            <div className="feedback-ref">📖 {q.course_ref}</div>
          </div>
        )}

        <div className="qactions">
          {!checked ? (
            <button className="big primary" onClick={check}>Vérifier</button>
          ) : (
            <button className="big primary" onClick={next}>{i + 1 >= list.length ? 'Voir le résultat' : 'Suivant →'}</button>
          )}
        </div>
      </div>
    </div>
  )
}
