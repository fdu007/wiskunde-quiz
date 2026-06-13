// Schémas SVG réutilisables pour illustrer les questions de géométrie.
// On les attache aux questions via FIGURE_FOR_ID (id question -> clé figure).
// Les figures sont génériques (elles illustrent le concept, pas les valeurs exactes).

const S = { stroke: '#1e293b', strokeWidth: 2, fill: 'none' }
const A = { stroke: '#2563eb', strokeWidth: 2.5, fill: 'none' } // arcs/angles
const L = { fill: '#0f172a', fontSize: 13, fontFamily: 'Inter, sans-serif', fontWeight: 600 }

function Wrap({ children, w = 260, h = 150 }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="figure" role="img">
      {children}
    </svg>
  )
}

const Complement = () => (
  <Wrap>
    <line x1="30" y1="120" x2="220" y2="120" {...S} />
    <line x1="30" y1="120" x2="30" y2="20" {...S} />
    <line x1="30" y1="120" x2="170" y2="40" {...S} />
    <path d="M 30 95 A 25 25 0 0 0 52 108" {...A} />
    <path d="M 55 105 A 35 35 0 0 0 65 88" {...A} stroke="#db2777" />
    <text x="60" y="100" {...L}>α</text>
    <text x="80" y="80" {...L} fill="#db2777">β</text>
    <text x="120" y="138" {...L} fontSize="11" fill="#64748b">α + β = 90°</text>
  </Wrap>
)

const Supplement = () => (
  <Wrap>
    <line x1="20" y1="100" x2="240" y2="100" {...S} />
    <line x1="130" y1="100" x2="80" y2="25" {...S} />
    <path d="M 105 100 A 25 25 0 0 0 118 78" {...A} />
    <path d="M 155 100 A 25 25 0 0 1 142 78" {...A} stroke="#db2777" />
    <text x="98" y="88" {...L}>α</text>
    <text x="150" y="88" {...L} fill="#db2777">β</text>
    <text x="80" y="130" {...L} fontSize="11" fill="#64748b">α + β = 180°</text>
  </Wrap>
)

const Overstaande = () => (
  <Wrap>
    <line x1="30" y1="30" x2="230" y2="120" {...S} />
    <line x1="30" y1="120" x2="230" y2="30" {...S} />
    <text x="120" y="58" {...L}>α</text>
    <text x="120" y="108" {...L}>α</text>
    <text x="70" y="82" {...L} fill="#db2777">β</text>
    <text x="178" y="82" {...L} fill="#db2777">β</text>
    <text x="55" y="140" {...L} fontSize="11" fill="#64748b">overstaande hoeken = gelijk</text>
  </Wrap>
)

const Parallel = () => (
  <Wrap h={170}>
    <line x1="20" y1="50" x2="240" y2="50" {...S} />
    <line x1="20" y1="120" x2="240" y2="120" {...S} />
    <line x1="70" y1="20" x2="190" y2="150" {...S} stroke="#16a34a" />
    <text x="245" y="54" {...L} fontSize="12" fill="#64748b">a</text>
    <text x="245" y="124" {...L} fontSize="12" fill="#64748b">b</text>
    <text x="192" y="150" {...L} fontSize="12" fill="#16a34a">c</text>
    <circle cx="93" cy="50" r="3" fill="#2563eb" />
    <circle cx="163" cy="120" r="3" fill="#2563eb" />
    <text x="100" y="44" {...L}>1</text>
    <text x="170" y="114" {...L}>1</text>
    <text x="40" y="160" {...L} fontSize="11" fill="#64748b">a // b, gesneden door c</text>
  </Wrap>
)

const Triangle = () => (
  <Wrap>
    <polygon points="40,120 220,120 90,30" {...S} />
    <text x="28" y="135" {...L}>A</text>
    <text x="222" y="135" {...L}>B</text>
    <text x="84" y="24" {...L}>C</text>
    <path d="M 58 120 A 18 18 0 0 0 53 105" {...A} />
    <path d="M 200 120 A 18 18 0 0 1 205 106" {...A} stroke="#db2777" />
    <path d="M 86 48 A 16 16 0 0 0 100 50" {...A} stroke="#16a34a" />
    <text x="115" y="138" {...L} fontSize="11" fill="#64748b">Â + B̂ + Ĉ = 180°</text>
  </Wrap>
)

const RightTriangle = () => (
  <Wrap>
    <polygon points="40,120 200,120 40,30" {...S} />
    <rect x="40" y="105" width="15" height="15" {...S} strokeWidth="1.5" />
    <text x="28" y="135" {...L}>A</text>
    <text x="202" y="135" {...L}>B</text>
    <text x="28" y="26" {...L}>C</text>
    <text x="100" y="138" {...L} fontSize="11" fill="#64748b">rechthoekige driehoek (90°)</text>
  </Wrap>
)

const Isosceles = () => (
  <Wrap>
    <polygon points="130,25 50,125 210,125" {...S} />
    <text x="128" y="20" {...L}>A</text>
    <text x="38" y="138" {...L}>B</text>
    <text x="214" y="138" {...L}>C</text>
    {/* marques d'égalité des côtés AB et AC */}
    <line x1="86" y1="71" x2="94" y2="77" stroke="#16a34a" strokeWidth="2" />
    <line x1="166" y1="77" x2="174" y2="71" stroke="#16a34a" strokeWidth="2" />
    <path d="M 68 125 A 16 16 0 0 0 78 113" {...A} stroke="#db2777" />
    <path d="M 192 125 A 16 16 0 0 1 182 113" {...A} stroke="#db2777" />
    <text x="40" y="148" {...L} fontSize="11" fill="#64748b">|AB| = |AC| → basishoeken gelijk</text>
  </Wrap>
)

const QuadDiagonals = () => (
  <Wrap>
    <polygon points="50,40 210,40 180,120 20,120" {...S} />
    <line x1="50" y1="40" x2="180" y2="120" {...A} stroke="#db2777" strokeDasharray="4 3" />
    <line x1="210" y1="40" x2="20" y2="120" {...A} stroke="#db2777" strokeDasharray="4 3" />
    <circle cx="115" cy="80" r="3" fill="#2563eb" />
    <text x="44" y="36" {...L}>A</text>
    <text x="212" y="36" {...L}>B</text>
    <text x="182" y="134" {...L}>C</text>
    <text x="10" y="134" {...L}>D</text>
    <text x="40" y="150" {...L} fontSize="11" fill="#64748b">diagonalen</text>
  </Wrap>
)

const Schijf = () => (
  <Wrap w={220} h={150}>
    {/* camembert générique : 3 secteurs */}
    <circle cx="90" cy="75" r="58" {...S} />
    <path d="M90 75 L90 17 A58 58 0 0 1 142 99 Z" fill="#bfdbfe" stroke="#1e293b" strokeWidth="1.5" />
    <path d="M90 75 L142 99 A58 58 0 0 1 52 121 Z" fill="#fde68a" stroke="#1e293b" strokeWidth="1.5" />
    <path d="M90 75 L52 121 A58 58 0 0 1 90 17 Z" fill="#fbcfe8" stroke="#1e293b" strokeWidth="1.5" />
    <text x="160" y="60" {...L} fontSize="11" fill="#64748b">hoek = </text>
    <text x="160" y="76" {...L} fontSize="11" fill="#64748b">deel/totaal</text>
    <text x="160" y="92" {...L} fontSize="11" fill="#64748b">× 360°</text>
  </Wrap>
)

const RectArea = () => (
  <Wrap w={240} h={140}>
    <rect x="40" y="35" width="150" height="80" {...S} fill="#eff6ff" />
    <text x="100" y="30" {...L} fontSize="12" fill="#2563eb">lengte</text>
    <text x="195" y="80" {...L} fontSize="12" fill="#db2777">breedte</text>
  </Wrap>
)

const Balk = () => (
  <Wrap w={230} h={150}>
    <rect x="40" y="55" width="110" height="70" {...S} fill="#eff6ff" />
    <polygon points="40,55 75,30 185,30 150,55" {...S} fill="#dbeafe" />
    <polygon points="150,55 185,30 185,100 150,125" {...S} fill="#bfdbfe" />
    <text x="85" y="142" {...L} fontSize="11" fill="#2563eb">lengte</text>
    <text x="160" y="95" {...L} fontSize="11" fill="#db2777">hoogte</text>
    <text x="100" y="48" {...L} fontSize="11" fill="#16a34a">breedte</text>
    <text x="30" y="20" {...L} fontSize="12" fill="#64748b">V = l × b × h</text>
  </Wrap>
)

const Middelloodlijn = () => (
  <Wrap w={240} h={150}>
    <line x1="40" y1="100" x2="200" y2="100" {...S} />
    <circle cx="40" cy="100" r="3" fill="#1e293b" />
    <circle cx="200" cy="100" r="3" fill="#1e293b" />
    <line x1="120" y1="30" x2="120" y2="135" {...A} strokeDasharray="5 4" />
    <rect x="120" y="92" width="9" height="8" {...S} strokeWidth="1.2" />
    <text x="32" y="118" {...L}>A</text>
    <text x="196" y="118" {...L}>B</text>
    <text x="128" y="26" {...L} fontSize="11" fill="#2563eb">middelloodlijn</text>
    <text x="40" y="145" {...L} fontSize="10" fill="#64748b">elk punt even ver van A en B</text>
  </Wrap>
)

const Bissectrice = () => (
  <Wrap w={240} h={150}>
    <line x1="40" y1="120" x2="210" y2="120" {...S} />
    <line x1="40" y1="120" x2="190" y2="35" {...S} />
    <line x1="40" y1="120" x2="200" y2="80" {...A} strokeDasharray="5 4" />
    <path d="M 75 120 A 35 35 0 0 0 70 100" {...A} stroke="#db2777" />
    <path d="M 70 100 A 35 35 0 0 0 62 84" {...A} stroke="#16a34a" />
    <text x="150" y="92" {...L} fontSize="11" fill="#2563eb">bissectrice</text>
    <text x="40" y="145" {...L} fontSize="10" fill="#64748b">deelt de hoek in 2 gelijke delen</text>
  </Wrap>
)

const FIGURES = {
  complement: Complement,
  supplement: Supplement,
  overstaande: Overstaande,
  parallel: Parallel,
  triangle: Triangle,
  rightTriangle: RightTriangle,
  isosceles: Isosceles,
  quadDiagonals: QuadDiagonals,
  schijf: Schijf,
  rectArea: RectArea,
  balk: Balk,
  middelloodlijn: Middelloodlijn,
  bissectrice: Bissectrice,
}

// Quelle figure pour quelle question.
export const FIGURE_FOR_ID = {
  'ho-01': 'complement',
  'ho-02': 'supplement',
  'ho-03': 'complement',
  'ho-04': 'supplement',
  'ho-05': 'overstaande',
  'ho-06': 'overstaande',
  'ho-07': 'parallel',
  'ho-08': 'parallel',
  'ho-09': 'parallel',
  'ho-10': 'parallel',
  'ho-11': 'parallel',
  'ho-12': 'parallel',
  'ho-13': 'parallel',
  'ho-14': 'parallel',
  'ho-15': 'parallel',
  'ho-16': 'triangle',
  'ho-17': 'triangle',
  'ho-18': 'rightTriangle',
  'ho-19': 'triangle',
  'ho-20': 'triangle',
  'dr-08': 'isosceles',
  'dr-09': 'isosceles',
  'dr-10': 'isosceles',
  'dr-11': 'triangle',
  'vi-02': 'quadDiagonals',
  'vi-05': 'quadDiagonals',
  'vi-06': 'quadDiagonals',
  'vi-07': 'quadDiagonals',
  'vi-08': 'quadDiagonals',
  'vi-09': 'quadDiagonals',
  'vi-10': 'quadDiagonals',
  'vi-16': 'quadDiagonals',
  'vi-17': 'quadDiagonals',
  // nouvelles questions de géométrie
  'ho-21': 'complement',
  'ho-22': 'overstaande',
  'ho-23': 'supplement',
  'ho-24': 'parallel',
  'ho-25': 'parallel',
  'ho-26': 'parallel',
  'ho-27': 'isosceles',
  'ho-28': 'triangle',
  'dr-19': 'middelloodlijn',
  'dr-20': 'middelloodlijn',
  'dr-21': 'bissectrice',
  'dr-22': 'bissectrice',
  'dr-23': 'isosceles',
  'dr-24': 'triangle',
  'dr-25': 'triangle',
  'dr-26': 'triangle',
  'vi-18': 'quadDiagonals',
  'vi-21': 'quadDiagonals',
  'vi-23': 'quadDiagonals',
  'vi-25': 'quadDiagonals',
  // schijfdiagram (point faible)
  'ev-13': 'schijf',
  'ev-14': 'schijf',
  'ev-15': 'schijf',
  'ev-17': 'schijf',
  'ev-19': 'schijf',
  'ev-21': 'schijf',
  'ev-22': 'schijf',
  'ev-23': 'schijf',
  'ev-24': 'schijf',
  'ev-30': 'schijf',
  // veeltermen appliqués à la géométrie (point faible)
  've-20': 'rectArea',
  've-21': 'balk',
  've-22': 'rectArea',
  've-31': 'rectArea',
  've-32': 'rectArea',
  've-33': 'rectArea',
  've-36': 'balk',
}

export function Figure({ id }) {
  const key = FIGURE_FOR_ID[id]
  if (!key) return null
  const Comp = FIGURES[key]
  return (
    <div className="figure-box">
      <Comp />
    </div>
  )
}
