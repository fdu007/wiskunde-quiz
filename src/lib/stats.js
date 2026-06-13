import questions from '../data/questions.json'
import { THEMES, themesForCourse, themeByKey } from '../data/themes.js'
import { courseByKey } from '../data/courses.js'

export const countByTheme = {}
for (const q of questions) countByTheme[q.theme] = (countByTheme[q.theme] || 0) + 1

export const questionsForCourse = (course) => questions.filter((q) => themeByKey[q.theme]?.course === course)

// Résultats par thème pour un cours : { key, title, total, correct, pct, mastered(100%) }
export function themeResults(progress, course) {
  const themes = course ? themesForCourse(course) : THEMES
  return themes.map((t) => {
    const total = countByTheme[t.key] || 0
    const correct = Math.min(progress.byTheme?.[t.key]?.correct || 0, total)
    const pct = total ? Math.round((correct / total) * 100) : 0
    return { key: t.key, title: t.title, total, correct, pct, mastered: total > 0 && correct === total }
  })
}

export function masteredCount(progress, course) {
  return themeResults(progress, course).filter((r) => r.mastered).length
}

export const PS_MIN_PER_THEME = 10
// PlayStation : 10 min par thème maîtrisé à 100 %, toutes matières confondues.
export function playstationMinutes(progress) {
  return masteredCount(progress) * PS_MIN_PER_THEME
}

export function buildEmailBody(progress, lang, course) {
  const res = themeResults(progress, course)
  const totalCorrect = res.reduce((s, r) => s + r.correct, 0)
  const totalQ = res.reduce((s, r) => s + r.total, 0)
  const L = lang === 'nl'
  const c = courseByKey[course]
  const lines = []
  lines.push(`${L ? 'Resultaten' : 'Résultats'} ${c ? c.label : ''} - Corentin`)
  lines.push('')
  lines.push(`${L ? 'Totaal juist' : 'Total correct'}: ${totalCorrect}/${totalQ}`)
  lines.push('')
  lines.push(L ? 'Per thema:' : 'Par thème :')
  for (const r of res) lines.push(`- ${r.title}: ${r.correct}/${r.total} (${r.pct}%)${r.mastered ? ' ✅ 100%' : ''}`)
  lines.push('')
  lines.push(`XP: ${progress.xp} · 🎮 PlayStation: ${playstationMinutes(progress)} min`)
  return lines.join('\n')
}

export function mailtoResults(progress, lang, course) {
  const c = courseByKey[course]
  const subject = `${lang === 'nl' ? 'Resultaten' : 'Résultats'} ${c ? c.label : ''} - Corentin`
  const body = buildEmailBody(progress, lang, course)
  return `mailto:duboisf@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
