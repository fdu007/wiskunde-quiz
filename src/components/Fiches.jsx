import { useEffect, useMemo, useRef, useState } from 'react'
import { marked } from 'marked'
import renderMathInElement from 'katex/contrib/auto-render'
import { themesForCourse } from '../data/themes.js'
import { STR } from '../lib/i18n.js'

// Import du contenu markdown des fiches (Vite ?raw) : version FR (bilingue) et version NL.
import f1 from '../data/fiches/1-evenredigheden.md?raw'
import f2 from '../data/fiches/2-machten.md?raw'
import f3 from '../data/fiches/3-veeltermen.md?raw'
import f4 from '../data/fiches/4-hoeken.md?raw'
import f5 from '../data/fiches/5-congruentie.md?raw'
import f6 from '../data/fiches/6-driehoeken.md?raw'
import f7 from '../data/fiches/7-vierhoeken.md?raw'
import h1 from '../data/fiches/h1-goden-religie.md?raw'
import h2 from '../data/fiches/h2-olympische-spelen.md?raw'
import h3 from '../data/fiches/h3-filosofie.md?raw'
import h4 from '../data/fiches/h4-kunst.md?raw'
import h5 from '../data/fiches/h5-sparta.md?raw'
import h6 from '../data/fiches/h6-oorlog-hellenisme.md?raw'
import h7 from '../data/fiches/h7-rome-politiek.md?raw'
import h8 from '../data/fiches/h8-rome-maatschappij.md?raw'
import h9 from '../data/fiches/h9-algemeen.md?raw'
import f1n from '../data/fiches/1-evenredigheden-nl.md?raw'
import f2n from '../data/fiches/2-machten-nl.md?raw'
import f3n from '../data/fiches/3-veeltermen-nl.md?raw'
import f4n from '../data/fiches/4-hoeken-nl.md?raw'
import f5n from '../data/fiches/5-congruentie-nl.md?raw'
import f6n from '../data/fiches/6-driehoeken-nl.md?raw'
import f7n from '../data/fiches/7-vierhoeken-nl.md?raw'
import h1n from '../data/fiches/h1-goden-religie-nl.md?raw'
import h2n from '../data/fiches/h2-olympische-spelen-nl.md?raw'
import h3n from '../data/fiches/h3-filosofie-nl.md?raw'
import h4n from '../data/fiches/h4-kunst-nl.md?raw'
import h5n from '../data/fiches/h5-sparta-nl.md?raw'
import h6n from '../data/fiches/h6-oorlog-hellenisme-nl.md?raw'
import h7n from '../data/fiches/h7-rome-politiek-nl.md?raw'
import h8n from '../data/fiches/h8-rome-maatschappij-nl.md?raw'
import h9n from '../data/fiches/h9-algemeen-nl.md?raw'

const SRC = {
  fr: {
    '1-evenredigheden': f1, '2-machten': f2, '3-veeltermen': f3, '4-hoeken': f4,
    '5-congruentie': f5, '6-driehoeken': f6, '7-vierhoeken': f7,
    'h1-goden-religie': h1, 'h2-olympische-spelen': h2, 'h3-filosofie': h3, 'h4-kunst': h4,
    'h5-sparta': h5, 'h6-oorlog-hellenisme': h6, 'h7-rome-politiek': h7, 'h8-rome-maatschappij': h8, 'h9-algemeen': h9,
  },
  nl: {
    '1-evenredigheden': f1n, '2-machten': f2n, '3-veeltermen': f3n, '4-hoeken': f4n,
    '5-congruentie': f5n, '6-driehoeken': f6n, '7-vierhoeken': f7n,
    'h1-goden-religie': h1n, 'h2-olympische-spelen': h2n, 'h3-filosofie': h3n, 'h4-kunst': h4n,
    'h5-sparta': h5n, 'h6-oorlog-hellenisme': h6n, 'h7-rome-politiek': h7n, 'h8-rome-maatschappij': h8n, 'h9-algemeen': h9n,
  },
}

export default function Fiches({ progress, lang, course, onRead }) {
  const t = STR[lang]
  const [active, setActive] = useState(null)
  const ref = useRef(null)
  const themes = themesForCourse(course)

  const html = useMemo(() => {
    if (!active) return ''
    const src = (SRC[lang] && SRC[lang][active]) || SRC.fr[active]
    return marked.parse(src)
  }, [active, lang])

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
        <button className="link" onClick={() => setActive(null)}>{t.all_fiches}</button>
        <article className="fiche-content" ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
        <button className="link" onClick={() => setActive(null)}>{t.all_fiches}</button>
      </div>
    )
  }

  return (
    <div className="fiches">
      <h2 className="section-title">{t.fiches_title}</h2>
      <p className="muted">{t.fiches_sub}</p>
      <div className="grid">
        {themes.map((th) => (
          <button key={th.key} className="card" style={{ '--c': th.color }} onClick={() => setActive(th.fiche)}>
            <div className="card-top">
              <span className="card-icon">{th.icon}</span>
              {progress.fichesRead[th.fiche] && <span className="tag-read">{t.read}</span>}
            </div>
            <h3>{th.title}</h3>
            {lang === 'fr' && <p className="card-fr">{th.fr}</p>}
            <span className="chip">{th.chapters}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
