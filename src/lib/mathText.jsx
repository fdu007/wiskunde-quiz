import katex from 'katex'

// Échappe le HTML.
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// Un opérande de fraction : nombre, lettre (avec exposant éventuel), ou groupe entre parenthèses.
const OP = '(?:\\d+(?:[.,]\\d+)?|\\([^()]+\\)|[A-Za-z](?:\\^\\{?-?[0-9A-Za-z]+\\}?)?)'
// Fraction A/B, avec frontières pour ne pas casser les mots (deel/totaal) ni les unités (km/h).
const FRAC = new RegExp(`(?<![A-Za-z0-9])(${OP})\\/(${OP})(?![A-Za-z0-9])`, 'g')

function stripParens(s) {
  if (s.startsWith('(') && s.endsWith(')')) return s.slice(1, -1)
  return s
}

function katexFrac(a, b) {
  try {
    return katex.renderToString(`\\dfrac{${stripParens(a)}}{${stripParens(b)}}`, { throwOnError: false })
  } catch {
    return esc(`${a}/${b}`)
  }
}

// Texte simple -> HTML : exposants a^b et a^(b).
function plainToHtml(text) {
  let h = esc(text)
  h = h.replace(/\^[({]([^)}]+)[)}]/g, '<sup>$1</sup>')
  h = h.replace(/\^(-?[0-9A-Za-z]+)/g, '<sup>$1</sup>')
  return h
}

// Convertit un segment hors-LaTeX : d'abord les fractions (KaTeX), puis le reste en texte.
function segmentToHtml(seg) {
  let out = ''
  let last = 0
  let m
  FRAC.lastIndex = 0
  while ((m = FRAC.exec(seg)) !== null) {
    out += plainToHtml(seg.slice(last, m.index))
    out += katexFrac(m[1], m[2])
    last = m.index + m[0].length
  }
  out += plainToHtml(seg.slice(last))
  return out
}

// Rendu complet : segments LaTeX $...$ via KaTeX, le reste via segmentToHtml.
export function toHtml(input) {
  if (input === null || input === undefined) return ''
  const text = String(input)
  const parts = text.split(/(\$[^$]+\$)/g)
  return parts
    .map((part) => {
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        try {
          return katex.renderToString(part.slice(1, -1), { throwOnError: false, displayMode: false })
        } catch {
          return esc(part)
        }
      }
      return segmentToHtml(part)
    })
    .join('')
}

export function MathText({ children, as = 'span', className }) {
  const Tag = as
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: toHtml(children) }} />
}
