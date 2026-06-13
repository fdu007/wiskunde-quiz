import { BADGES, levelFromXp } from '../lib/progress.js'
import { STR, BADGE_LABELS } from '../lib/i18n.js'
import { playstationMinutes } from '../lib/stats.js'

export default function Badges({ progress, lang, onReset }) {
  const t = STR[lang]
  const labels = BADGE_LABELS[lang]
  const lvl = levelFromXp(progress.xp)
  const got = BADGES.filter((b) => progress.badges[b.id]).length

  return (
    <div className="badges-view">
      <section className="stats-row">
        <div className="stat-box"><span className="stat-n">{lvl.level}</span><span>{t.stats_level}</span></div>
        <div className="stat-box"><span className="stat-n">{progress.xp}</span><span>XP</span></div>
        <div className="stat-box"><span className="stat-n">{progress.bestStreak || 0} 🔥</span><span>{t.stats_streak}</span></div>
        <div className="stat-box"><span className="stat-n">{playstationMinutes(progress)}'</span><span>🎮 PlayStation</span></div>
      </section>

      <h2 className="section-title">{t.badges_title} ({got}/{BADGES.length})</h2>
      <div className="badge-grid">
        {BADGES.map((b) => {
          const have = !!progress.badges[b.id]
          const [label, desc] = labels[b.id] || [b.id, '']
          return (
            <div key={b.id} className={`badge ${have ? 'have' : 'locked'}`}>
              <span className="badge-icon">{have ? b.icon : '🔒'}</span>
              <strong>{label}</strong>
              <span className="badge-desc">{desc}</span>
            </div>
          )
        })}
      </div>

      <button className="reset-btn" onClick={onReset}>{t.reset}</button>
    </div>
  )
}
