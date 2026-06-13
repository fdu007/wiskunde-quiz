import { COURSES } from '../data/courses.js'
import { themesForCourse } from '../data/themes.js'
import { STR } from '../lib/i18n.js'
import { masteredCount, questionsForCourse } from '../lib/stats.js'

export default function CoursePicker({ progress, lang, onPick }) {
  const t = STR[lang]
  return (
    <div className="course-picker">
      <h1 className="cp-title">{t.pick_course_title}</h1>
      <p className="muted">{t.pick_course_sub}</p>
      <div className="cp-grid">
        {COURSES.map((c) => {
          const themes = themesForCourse(c.key)
          const qn = questionsForCourse(c.key).length
          const mastered = masteredCount(progress, c.key)
          return (
            <button key={c.key} className="cp-card" style={{ '--c': c.color }} onClick={() => onPick(c.key)}>
              <span className="cp-icon">{c.icon}</span>
              <h2>{c.label}</h2>
              <p className="cp-fr">{lang === 'nl' ? c.tagline.nl : c.tagline.fr}</p>
              <div className="cp-meta">
                <span className="chip">{themes.length} {lang === 'nl' ? "thema's" : 'thèmes'}</span>
                <span className="chip">{qn} {lang === 'nl' ? 'vragen' : 'questions'}</span>
              </div>
              <div className="cp-mastered">{lang === 'nl' ? 'Beheerst' : 'Maîtrisés'} : <strong>{mastered}/{themes.length}</strong> 🎮</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
