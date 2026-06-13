import { useEffect, useMemo, useRef, useState } from 'react'
import { marked } from 'marked'
import katex from 'katex'
import renderMathInElement from 'katex/contrib/auto-render'
import { THEMES } from '../data/themes.js'

// Import du contenu markdown des fiches (Vite ?raw).
import f1 from '../data/fiches/1-evenredigheden.md?raw'
import f2 from '../data/fiches/2-machten.md?raw'
import f3 from '../data/fiches/3-veeltermen.md?raw'
import f4 from '../data/fiches/4-hoeken.md?raw'
import f5 from '../data/fiches/5-congruentie.md?raw'
import f6 from '../data/fiches/6-driehoeken.md?raw'
import f7 from '../data/fiches/7-vierhoeken.md?raw'

const SRC = {
  '1-evenredigheden': f1,
  '2-machten': f2,
  '3-veeltermen': f3,
  '4-hoeken': f4,
  '5-congruentie': f5,
  '6-driehoeken': f6,
  '7-vierhoeken': f7,
}

export default function Fiches({ progress, onRead }) {
  const [active, setActive] = useState(null) // theme.fiche
  const ref = useRef(null)

  const html = useMemo(() => (active ? marked.parse(SRC[active]) : ''), [active])

  useEffect(() => {
    if (active && ref.current) {
      renderMathInElement(ref.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
        throwOnError: false,
      })
      onRead(active)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [active, html])

  if (active) {
    return (
      <div className="fiche-view">
        <button className="link" onClick={() => setActive(null)}>← Toutes les fiches</button>
        <article className="fiche-content" ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
        <button className="link" onClick={() => setActive(null)}>← Toutes les fiches</button>
      </div>
    )
  }

  return (
    <div className="fiches">
      <h2 className="section-title">📚 Fiches de révision</h2>
      <p className="muted">Tout ce qu'il faut connaître, par thème. Termes en néerlandais, explications en français.</p>
      <div className="grid">
        {THEMES.map((t) => (
          <button key={t.key} className="card" style={{ '--c': t.color }} onClick={() => setActive(t.fiche)}>
            <div className="card-top">
              <span className="card-icon">{t.icon}</span>
              {progress.fichesRead[t.fiche] && <span className="tag-read">✓ lue</span>}
            </div>
            <h3>{t.title}</h3>
            <p className="card-fr">{t.fr}</p>
            <span className="chip">{t.chapters}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
