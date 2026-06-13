import katex from 'katex'

// Échappe le HTML.
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// Convertit la notation simple du cours en HTML :
//  - exposants a^b, a^(b), a^{b}
//  - fragments LaTeX entre $...$ rendus avec KaTeX
// Renvoie une chaîne HTML prête pour dangerouslySetInnerHTML.
export function toHtml(input) {
  if (input === null || input === undefined) return ''
  let text = String(input)

  // 1) segments LaTeX inline $...$
  const parts = text.split(/(\$[^$]+\$)/g)
  return parts
    .map((part) => {
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        try {
          return katex.renderToString(part.slice(1, -1), {
            throwOnError: false,
            displayMode: false,
          })
        } catch {
          return esc(part)
        }
      }
      // 2) texte normal : on échappe puis on gère les exposants
      let h = esc(part)
      // a^(...) ou a^{...}
      h = h.replace(/\^[({]([^)}]+)[)}]/g, '<sup>$1</sup>')
      // a^b (un seul caractère/chiffre, éventuel signe -)
      h = h.replace(/\^(-?[0-9a-zA-Z]+)/g, '<sup>$1</sup>')
      return h
    })
    .join('')
}

// Composant pratique.
export function MathText({ children, as = 'span', className }) {
  const Tag = as
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: toHtml(children) }} />
}
