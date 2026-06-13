import { THEMES, themeByKey } from '../data/themes.js'
import { levelFromXp } from '../lib/progress.js'
import { STR } from '../lib/i18n.js'
import { themeResults, masteredCount, playstationMinutes, mailtoResults } from '../lib/stats.js'

export default function Stats({ progress, lang, course, onTheme, onFiches }) {
  const t = STR[lang]
  const res = themeResults(progress, course)
  const lvl = levelFromXp(progress.xp)

  const totalCorrect = res.reduce((s, r) => s + r.correct, 0)
  const totalQ = res.reduce((s, r) => s + r.total, 0)
  const overallPct = totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0
  const courseThemeKeys = new Set(res.map((r) => r.key))
  const attempts = Object.entries(progress.byTheme || {}).filter(([k]) => courseThemeKeys.has(k)).reduce((s, [, b]) => s + (b.attempts || 0), 0)
  const correctAttempts = Object.entries(progress.byTheme || {}).filter(([k]) => courseThemeKeys.has(k)).reduce((s, [, b]) => s + (b.correctAttempts || 0), 0)
  const accuracy = attempts ? Math.round((correctAttempts / attempts) * 100) : 0

  // Recommandations
  const recos = []
  if (attempts === 0) {
    recos.push({ text: t.reco_start, action: onFiches, label: t.reco_read })
  } else if (masteredCount(progress, course) === res.length) {
    recos.push({ text: t.reco_alldone })
  } else {
    const tpl = (s, r) => s.replace('{theme}', themeByKey[r.key].title).replace('{pct}', r.pct)
    // 1) points faibles non maîtrisés
    const weakUnmastered = res.filter((r) => themeByKey[r.key].weak && !r.mastered).sort((a, b) => a.pct - b.pct)
    // 2) presque maîtrisés (>=60 et <100)
    const almost = res.filter((r) => !r.mastered && r.pct >= 60).sort((a, b) => b.pct - a.pct)
    // 3) plus faibles globaux
    const low = res.filter((r) => !r.mastered && r.pct < 60).sort((a, b) => a.pct - b.pct)
    weakUnmastered.slice(0, 2).forEach((r) => recos.push({ text: tpl(t.reco_weak, r), action: () => onTheme(r.key), label: t.reco_do }))
    almost.slice(0, 2).forEach((r) => recos.push({ text: tpl(t.reco_almost, r), action: () => onTheme(r.key), label: t.reco_do }))
    low.slice(0, 2).forEach((r) => recos.push({ text: tpl(t.reco_low, r), action: () => onFiches(), label: t.reco_read }))
    if (recos.length === 0) {
      const next = res.filter((r) => !r.mastered).sort((a, b) => a.pct - b.pct)[0]
      if (next) recos.push({ text: tpl(t.reco_practice, next), action: () => onTheme(next.key), label: t.reco_do })
    }
  }

  return (
    <div className="stats-view">
      <h2 className="section-title">{t.stats_title}</h2>

      <section className="stats-row">
        <div className="stat-box"><span className="stat-n">{lvl.level}</span><span>{t.stats_level}</span></div>
        <div className="stat-box"><span className="stat-n">{progress.xp}</span><span>XP</span></div>
        <div className="stat-box"><span className="stat-n">{overallPct}%</span><span>{t.stats_overall}</span></div>
        <div className="stat-box"><span className="stat-n">{playstationMinutes(progress)}'</span><span>🎮 PlayStation</span></div>
      </section>

      <div className="bigbar">
        <div className="bigbar-head"><span>{t.stats_answered}</span><strong>{totalCorrect}/{totalQ}</strong></div>
        <div className="progress-bar lg"><div style={{ width: `${overallPct}%` }} /></div>
        <div className="bigbar-sub">
          <span>{t.stats_accuracy} : <strong>{accuracy}%</strong></span>
          <span>{t.stats_attempts} : <strong>{attempts}</strong></span>
        </div>
      </div>

      <h2 className="section-title">{t.theme_progress}</h2>
      <div className="theme-stats">
        {res.map((r) => {
          const th = themeByKey[r.key]
          return (
            <button key={r.key} className="theme-stat clickable" onClick={() => onTheme(r.key)}>
              <span className="ts-name">{th.icon} {th.title} {r.mastered && '🎮'}</span>
              <div className="progress-bar"><div style={{ width: `${r.pct}%`, background: th.color }} /></div>
              <span className="ts-num">{r.correct}/{r.total}</span>
            </button>
          )
        })}
      </div>

      <h2 className="section-title">{t.reco_title}</h2>
      <div className="recos">
        {recos.map((r, idx) => (
          <div key={idx} className="reco">
            <span className="reco-text">{r.text}</span>
            {r.action && <button className="reco-btn" onClick={r.action}>{r.label}</button>}
          </div>
        ))}
      </div>

      <a className="big email full" href={mailtoResults(progress, lang, course)}>{t.email_btn}</a>
    </div>
  )
}
