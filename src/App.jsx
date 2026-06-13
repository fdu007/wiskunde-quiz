import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import questions from './data/questions.json'
import { THEMES } from './data/themes.js'
import { load, save, reset, levelFromXp } from './lib/progress.js'
import { masteredCount, playstationMinutes } from './lib/stats.js'
import { STR } from './lib/i18n.js'
import Home from './components/Home.jsx'
import Quiz from './components/Quiz.jsx'
import Fiches from './components/Fiches.jsx'
import Badges from './components/Badges.jsx'
import Stats from './components/Stats.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function bigConfetti() {
  const end = Date.now() + 900
  ;(function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0 }, colors: ['#2563eb', '#22d3ee', '#16a34a', '#ca8a04'] })
    confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1 }, colors: ['#db2777', '#7c3aed', '#ea580c'] })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()
}

export default function App() {
  const [view, setView] = useState('home')
  const [progress, setProgress] = useState(load)
  const [session, setSession] = useState(null)
  const [lang, setLang] = useState(() => localStorage.getItem('wq_lang') || 'nl')
  const [psToast, setPsToast] = useState(null)

  const t = STR[lang]

  useEffect(() => save(progress), [progress])
  useEffect(() => {
    localStorage.setItem('wq_lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const totalCount = questions.length
  const lvl = levelFromXp(progress.xp)

  function startTheme(themeKey) {
    const list = shuffle(questions.filter((q) => q.theme === themeKey))
    const th = THEMES.find((x) => x.key === themeKey)
    setSession({ title: `${th.icon} ${lang === 'nl' ? th.title : th.title}`, list })
    setView('quiz')
  }
  function startMix() {
    const list = shuffle(questions).slice(0, 10)
    setSession({ title: t.mix_title, list })
    setView('quiz')
  }
  function startExam() {
    const weak = questions.filter((q) => THEMES.find((x) => x.key === q.theme)?.weak)
    const rest = questions.filter((q) => !THEMES.find((x) => x.key === q.theme)?.weak)
    const list = shuffle([...shuffle(weak).slice(0, 9), ...shuffle(rest).slice(0, 6)])
    setSession({ title: t.exam_title, list })
    setView('quiz')
  }

  function finishQuiz(result) {
    const before = masteredCount(progress)
    setProgress((prev) => {
      const p = structuredClone(prev)
      let hard = Object.values(p.byTheme).reduce((s, th) => s + (th.hard || 0), 0)
      for (const r of result.perQuestion) {
        const tk = questions.find((q) => q.id === r.id)?.theme
        if (!p.byTheme[tk]) p.byTheme[tk] = { seen: 0, correct: 0, attempts: 0, correctAttempts: 0, hard: 0 }
        p.byTheme[tk].attempts += 1
        if (r.correct) {
          p.byTheme[tk].correctAttempts = (p.byTheme[tk].correctAttempts || 0) + 1
          if (!p.answered[r.id]) {
            p.answered[r.id] = true
            p.byTheme[tk].correct = (p.byTheme[tk].correct || 0) + 1
          }
          p.xp += r.difficulty * 10
          if (r.difficulty >= 3) {
            p.byTheme[tk].hard = (p.byTheme[tk].hard || 0) + 1
            hard += 1
          }
        }
      }
      p.bestStreak = Math.max(p.bestStreak || 0, result.maxStreak)
      p.level = levelFromXp(p.xp).level
      if (result.score > 0) p.badges.first = true
      if (result.maxStreak >= 5) p.badges.streak5 = true
      if (result.maxStreak >= 10) p.badges.streak10 = true
      if (result.total >= 8 && result.score === result.total) p.badges.perfect = true
      if (hard >= 10) p.badges.hard10 = true
      if (p.xp >= 500) p.badges.xp500 = true
      if (p.xp >= 1000) p.badges.xp1000 = true

      const after = masteredCount(p)
      if (after > before) {
        setTimeout(() => {
          bigConfetti()
          setPsToast(playstationMinutes(p))
          setTimeout(() => setPsToast(null), 4500)
        }, 400)
      }
      return p
    })
  }

  function markFicheRead(key) {
    setProgress((prev) => {
      const p = structuredClone(prev)
      p.fichesRead[key] = true
      if (THEMES.every((th) => p.fichesRead[th.fiche])) p.badges.explorer = true
      return p
    })
  }

  function doReset() {
    if (confirm(t.reset_confirm)) setProgress(reset())
  }

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={() => setView('home')}>
          <span className="brand-icon">📐</span>
          <span>Wiskunde Trainer</span>
        </button>
        <div className="topstats">
          <div className="langtoggle" role="group" aria-label="taal / langue">
            <button className={lang === 'fr' ? 'on' : ''} onClick={() => setLang('fr')}>🇫🇷 FR</button>
            <button className={lang === 'nl' ? 'on' : ''} onClick={() => setLang('nl')}>🇳🇱 NL</button>
          </div>
          <div className="lvl" title={`${progress.xp} XP`}>
            <span className="lvl-badge">{t.level} {lvl.level}</span>
            <div className="lvl-bar"><div style={{ width: `${lvl.pct}%` }} /></div>
          </div>
        </div>
      </header>

      <nav className="tabs">
        <button className={view === 'home' ? 'on' : ''} onClick={() => setView('home')}>{t.tab_home}</button>
        <button className={view === 'fiches' ? 'on' : ''} onClick={() => setView('fiches')}>{t.tab_fiches}</button>
        <button className={view === 'stats' ? 'on' : ''} onClick={() => setView('stats')}>{t.tab_stats}</button>
        <button className={view === 'badges' ? 'on' : ''} onClick={() => setView('badges')}>{t.tab_badges}</button>
      </nav>

      <main className="main">
        {view === 'home' && (
          <Home progress={progress} lang={lang} totalCount={totalCount} onTheme={startTheme} onMix={startMix} onExam={startExam} />
        )}
        {view === 'quiz' && session && (
          <Quiz session={session} lang={lang} progress={progress} onFinish={finishQuiz} onHome={() => setView('home')} />
        )}
        {view === 'fiches' && <Fiches progress={progress} lang={lang} onRead={markFicheRead} />}
        {view === 'stats' && <Stats progress={progress} lang={lang} onTheme={startTheme} onFiches={() => setView('fiches')} />}
        {view === 'badges' && <Badges progress={progress} lang={lang} onReset={doReset} />}
      </main>

      {psToast !== null && (
        <div className="ps-toast">🎮 +10 min PlayStation ! <span>{psToast} min {lang === 'nl' ? 'verdiend' : 'au total'}</span></div>
      )}

      <footer className="foot">
        <div className="madeby">Gemaakt door papa met <span className="heart">❤️</span></div>
        <div className="veelsucces">Veel succes! 🍀</div>
        <div className="foot-note">{t.footer_note}</div>
      </footer>
    </div>
  )
}
