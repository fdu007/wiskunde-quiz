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

const FIGURES = {
  complement: Complement,
  supplement: Supplement,
  overstaande: Overstaande,
  parallel: Parallel,
  triangle: Triangle,
  rightTriangle: RightTriangle,
  isosceles: Isosceles,
  quadDiagonals: QuadDiagonals,
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
