import { THEMES } from '../data/themes.js'
import { STR } from '../lib/i18n.js'
import { countByTheme, masteredCount, playstationMinutes } from '../lib/stats.js'

export default function Home({ progress, lang, totalCount, onTheme, onMix, onExam, onMock, onHard, onMarathon }) {
  const t = STR[lang]
  const mastered = masteredCount(progress)
  const psMin = playstationMinutes(progress)

  return (
    <div className="home">
      <section className="hero">
        <h1>{t.hero_title}</h1>
        <p>{t.hero_text.replace('{n}', totalCount)}</p>
        <div className="hero-actions">
          <button className="big primary" onClick={onExam}>{t.exam_challenge}</button>
          <button className="big" onClick={onMix}>{t.mix_quiz}</button>
        </div>
        <div className="hero-stat">{t.themes_mastered} : <strong>{mastered}/{THEMES.length}</strong></div>
      </section>

      <div className="ps-banner">
        <span className="ps-emoji">🎮</span>
        <div>
          <div className="ps-min">{psMin} {t.minutes} <span>PlayStation</span></div>
          <div className="ps-sub">{t.ps_hint}</div>
        </div>
      </div>

      <h2 className="section-title">{t.train_by_theme}</h2>
      <div className="grid">
        {THEMES.map((th) => {
          const total = countByTheme[th.key] || 0
          const correct = Math.min(progress.byTheme[th.key]?.correct || 0, total)
          const pct = total ? Math.round((correct / total) * 100) : 0
          const done = total > 0 && correct === total
          return (
            <button key={th.key} className={`card ${done ? 'done' : ''}`} style={{ '--c': th.color }} onClick={() => onTheme(th.key)}>
              <div className="card-top">
                <span className="card-icon">{th.icon}</span>
                {done ? <span className="tag-done">{t.mastered_100}</span> : th.weak && <span className="tag-weak">{t.to_reinforce}</span>}
              </div>
              <h3>{th.title}</h3>
              {lang === 'fr' && <p className="card-fr">{th.fr}</p>}
              <div className="card-meta">
                <span className="chip">{th.chapters}</span>
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

      <h2 className="section-title">{t.section_extra}</h2>
      <div className="extra-modes">
        <button className="mode-card mock" onClick={onMock}>
          <span className="mode-title">{t.mode_mock}</span>
          <span className="mode-sub">{t.mode_mock_sub}</span>
        </button>
        <button className="mode-card hard" onClick={onHard}>
          <span className="mode-title">{t.mode_hard}</span>
          <span className="mode-sub">{t.mode_hard_sub}</span>
        </button>
        <button className="mode-card marathon" onClick={onMarathon}>
          <span className="mode-title">{t.mode_marathon}</span>
          <span className="mode-sub">{t.mode_marathon_sub}</span>
        </button>
      </div>
    </div>
  )
}
