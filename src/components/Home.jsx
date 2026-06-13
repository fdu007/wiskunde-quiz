import { THEMES } from '../data/themes.js'
import questions from '../data/questions.json'

const countByTheme = {}
for (const q of questions) countByTheme[q.theme] = (countByTheme[q.theme] || 0) + 1

export default function Home({ progress, totalCount, onTheme, onMix, onExam }) {
  const mastered = THEMES.filter((t) => {
    const c = progress.byTheme[t.key]?.correct || 0
    return c >= Math.ceil(countByTheme[t.key] * 0.8)
  }).length

  return (
    <div className="home">
      <section className="hero">
        <h1>Klaar voor het examen? 🚀</h1>
        <p>
          Révise tes <strong>{totalCount} questions</strong> sur toute la matière de l'examen.
          Chaque réponse est expliquée pour bien comprendre.
        </p>
        <div className="hero-actions">
          <button className="big primary" onClick={onExam}>🎯 Défi examen</button>
          <button className="big" onClick={onMix}>🎲 Quiz mixte (10)</button>
        </div>
        <div className="hero-stat">Thèmes maîtrisés : <strong>{mastered}/{THEMES.length}</strong></div>
      </section>

      <h2 className="section-title">Entraîne-toi par thème</h2>
      <div className="grid">
        {THEMES.map((t) => {
          const total = countByTheme[t.key] || 0
          const correct = Math.min(progress.byTheme[t.key]?.correct || 0, total)
          const pct = total ? Math.round((correct / total) * 100) : 0
          return (
            <button key={t.key} className="card" style={{ '--c': t.color }} onClick={() => onTheme(t.key)}>
              <div className="card-top">
                <span className="card-icon">{t.icon}</span>
                {t.weak && <span className="tag-weak" title="Point à renforcer">⚠️ à renforcer</span>}
              </div>
              <h3>{t.title}</h3>
              <p className="card-fr">{t.fr}</p>
              <div className="card-meta">
                <span className="chip">{t.chapters}</span>
                <span className="chip">{total} q.</span>
              </div>
              <div className="progress">
                <div className="progress-bar"><div style={{ width: `${pct}%` }} /></div>
                <span className="progress-txt">{correct}/{total}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
