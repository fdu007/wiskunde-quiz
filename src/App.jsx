import { useEffect, useMemo, useState } from 'react'
import questions from './data/questions.json'
import { THEMES } from './data/themes.js'
import { load, save, reset, levelFromXp } from './lib/progress.js'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import Fiches from './components/Fiches.jsx'
import Badges from './components/Badges.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function App() {
  const [view, setView] = useState('home') // home | quiz | fiches | badges
  const [progress, setProgress] = useState(load)
  const [session, setSession] = useState(null) // { title, list }

  useEffect(() => save(progress), [progress])

  const totalCount = questions.length
  const lvl = levelFromXp(progress.xp)

  function startTheme(themeKey) {
    const list = shuffle(questions.filter((q) => q.theme === themeKey))
    const t = THEMES.find((x) => x.key === themeKey)
    setSession({ title: `${t.icon} ${t.title}`, subtitle: t.chapters, list })
    setView('quiz')
  }

  function startMix() {
    const list = shuffle(questions).slice(0, 10)
    setSession({ title: '🎲 Quiz mixte', subtitle: '10 questions au hasard', list })
    setView('quiz')
  }

  function startExam() {
    // Défi examen : priorité aux thèmes faibles, 15 questions.
    const weak = questions.filter((q) => THEMES.find((t) => t.key === q.theme)?.weak)
    const rest = questions.filter((q) => !THEMES.find((t) => t.key === q.theme)?.weak)
    const list = [...shuffle(weak).slice(0, 9), ...shuffle(rest).slice(0, 6)]
    setSession({ title: '🎯 Défi examen', subtitle: 'Focus sur tes points faibles', list: shuffle(list) })
    setView('quiz')
  }

  function finishQuiz(result) {
    // result : { perQuestion: [{id, correct, difficulty}], maxStreak, score, total }
    setProgress((prev) => {
      const p = structuredClone(prev)
      let hard = Object.values(p.byTheme).reduce((s, t) => s + (t.hard || 0), 0)
      for (const r of result.perQuestion) {
        const tk = questions.find((q) => q.id === r.id)?.theme
        if (!p.byTheme[tk]) p.byTheme[tk] = { seen: 0, correct: 0, attempts: 0, hard: 0 }
        p.byTheme[tk].attempts += 1
        if (r.correct) {
          p.byTheme[tk].correct = (p.byTheme[tk].correct || 0)
          if (!p.answered[r.id]) {
            p.answered[r.id] = true
            p.byTheme[tk].correct += 1
          }
          p.xp += r.difficulty * 10
          if (r.difficulty >= 3) {
            p.byTheme[tk].hard = (p.byTheme[tk].hard || 0) + 1
            hard += 1
          }
        }
      }
      p.bestStreak = Math.max(p.bestStreak, result.maxStreak)
      // Badges
      if (result.score > 0) p.badges.first = true
      if (result.maxStreak >= 5) p.badges.streak5 = true
      if (result.maxStreak >= 10) p.badges.streak10 = true
      if (result.total >= 8 && result.score === result.total) p.badges.perfect = true
      if (hard >= 10) p.badges.hard10 = true
      if (p.xp >= 500) p.badges.xp500 = true
      if (p.xp >= 1000) p.badges.xp1000 = true
      return p
    })
  }

  function markFicheRead(key) {
    setProgress((prev) => {
      const p = structuredClone(prev)
      p.fichesRead[key] = true
      if (THEMES.every((t) => p.fichesRead[t.fiche])) p.badges.explorer = true
      return p
    })
  }

  function doReset() {
    if (confirm('Effacer toute la progression (XP, badges) ?')) setProgress(reset())
  }

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={() => setView('home')}>
          <span className="brand-icon">📐</span>
          <span>Wiskunde Trainer</span>
        </button>
        <div className="topstats">
          <div className="lvl" title={`${progress.xp} XP`}>
            <span className="lvl-badge">Niv. {lvl.level}</span>
            <div className="lvl-bar"><div style={{ width: `${lvl.pct}%` }} /></div>
            <span className="lvl-xp">{progress.xp} XP</span>
          </div>
        </div>
      </header>

      <nav className="tabs">
        <button className={view === 'home' ? 'on' : ''} onClick={() => setView('home')}>🏠 Accueil</button>
        <button className={view === 'fiches' ? 'on' : ''} onClick={() => setView('fiches')}>📚 Fiches</button>
        <button className={view === 'badges' ? 'on' : ''} onClick={() => setView('badges')}>🏅 Badges</button>
      </nav>

      <main className="main">
        {view === 'home' && (
          <Home
            progress={progress}
            totalCount={totalCount}
            onTheme={startTheme}
            onMix={startMix}
            onExam={startExam}
          />
        )}
        {view === 'quiz' && session && (
          <Quiz session={session} onFinish={finishQuiz} onHome={() => setView('home')} />
        )}
        {view === 'fiches' && <Fiches progress={progress} onRead={markFicheRead} />}
        {view === 'badges' && <Badges progress={progress} onReset={doReset} />}
      </main>

      <footer className="foot">
        Examen juni 2026 · Getallenleer & Meetkunde · contenu basé sur le cours Matrix Wiskunde 2.
      </footer>
    </div>
  )
}
