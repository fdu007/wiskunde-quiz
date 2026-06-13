import { BADGES, levelFromXp } from '../lib/progress.js'
import { THEMES } from '../data/themes.js'
import questions from '../data/questions.json'

const countByTheme = {}
for (const q of questions) countByTheme[q.theme] = (countByTheme[q.theme] || 0) + 1

export default function Badges({ progress, onReset }) {
  const lvl = levelFromXp(progress.xp)
  const got = BADGES.filter((b) => progress.badges[b.id]).length

  return (
    <div className="badges-view">
      <section className="stats-row">
        <div className="stat-box"><span className="stat-n">{lvl.level}</span><span>Niveau</span></div>
        <div className="stat-box"><span className="stat-n">{progress.xp}</span><span>XP</span></div>
        <div className="stat-box"><span className="stat-n">{progress.bestStreak} 🔥</span><span>Meilleure série</span></div>
        <div className="stat-box"><span className="stat-n">{got}/{BADGES.length}</span><span>Badges</span></div>
      </section>

      <h2 className="section-title">🏅 Badges</h2>
      <div className="badge-grid">
        {BADGES.map((b) => {
          const have = !!progress.badges[b.id]
          return (
            <div key={b.id} className={`badge ${have ? 'have' : 'locked'}`}>
              <span className="badge-icon">{have ? b.icon : '🔒'}</span>
              <strong>{b.label}</strong>
              <span className="badge-desc">{b.desc}</span>
            </div>
          )
        })}
      </div>

      <h2 className="section-title">📊 Progression par thème</h2>
      <div className="theme-stats">
        {THEMES.map((t) => {
          const total = countByTheme[t.key] || 0
          const correct = Math.min(progress.byTheme[t.key]?.correct || 0, total)
          const pct = total ? Math.round((correct / total) * 100) : 0
          return (
            <div key={t.key} className="theme-stat">
              <span className="ts-name">{t.icon} {t.title}</span>
              <div className="progress-bar"><div style={{ width: `${pct}%`, background: t.color }} /></div>
              <span className="ts-num">{correct}/{total}</span>
            </div>
          )
        })}
      </div>

      <button className="reset-btn" onClick={onReset}>Réinitialiser ma progression</button>
    </div>
  )
}
