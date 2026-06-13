import questions from '../data/questions.json'
import { THEMES } from '../data/themes.js'

export const countByTheme = {}
for (const q of questions) countByTheme[q.theme] = (countByTheme[q.theme] || 0) + 1

// Résultats par thème : { key, title, total, correct, pct, mastered(100%) }
export function themeResults(progress) {
  return THEMES.map((t) => {
    const total = countByTheme[t.key] || 0
    const correct = Math.min(progress.byTheme?.[t.key]?.correct || 0, total)
    const pct = total ? Math.round((correct / total) * 100) : 0
    return { key: t.key, title: t.title, total, correct, pct, mastered: total > 0 && correct === total }
  })
}

export function masteredCount(progress) {
  return themeResults(progress).filter((r) => r.mastered).length
}

export const PS_MIN_PER_THEME = 10
export function playstationMinutes(progress) {
  return masteredCount(progress) * PS_MIN_PER_THEME
}

// Corps d'email (texte simple) avec les résultats par thème.
export function buildEmailBody(progress, lang = 'fr') {
  const res = themeResults(progress)
  const totalCorrect = res.reduce((s, r) => s + r.correct, 0)
  const totalQ = res.reduce((s, r) => s + r.total, 0)
  const ps = playstationMinutes(progress)
  const L = lang === 'nl'
  const lines = []
  lines.push(L ? 'Resultaten Wiskunde Trainer - Corentin' : 'Résultats Wiskunde Trainer - Corentin')
  lines.push('')
  lines.push(`${L ? 'Niveau' : 'Niveau'}: ${progress.level || ''}  XP: ${progress.xp}`)
  lines.push(`${L ? 'Totaal juist' : 'Total correct'}: ${totalCorrect}/${totalQ}`)
  lines.push('')
  lines.push(L ? 'Per thema:' : 'Par thème :')
  for (const r of res) {
    lines.push(`- ${r.title}: ${r.correct}/${r.total} (${r.pct}%)${r.mastered ? ' ✅ 100%' : ''}`)
  }
  lines.push('')
  lines.push(`🎮 PlayStation: ${ps} min ${L ? 'verdiend' : 'gagnées'} (${masteredCount(progress)} ${L ? "thema's 100%" : 'thèmes à 100%'})`)
  return lines.join('\n')
}

export function mailtoResults(progress, lang = 'fr') {
  const subject = lang === 'nl' ? 'Resultaten Wiskunde - Corentin' : 'Résultats Wiskunde - Corentin'
  const body = buildEmailBody(progress, lang)
  return `mailto:duboisf@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
