// Gestion de la progression, persistée dans le localStorage.
const KEY = 'wq_progress_v1'

const empty = () => ({
  xp: 0,
  bestStreak: 0,
  byTheme: {}, // theme -> { seen, correct, attempts }
  answered: {}, // id -> true (déjà répondu correctement au moins une fois)
  badges: {}, // badgeId -> true
  fichesRead: {}, // ficheKey -> true
})

export function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty()
    return { ...empty(), ...JSON.parse(raw) }
  } catch {
    return empty()
  }
}

export function save(p) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p))
  } catch {
    /* quota / mode privé : on ignore */
  }
}

export function reset() {
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
  return empty()
}

// Badges disponibles.
export const BADGES = [
  { id: 'first', icon: '🌱', label: 'Premier pas', desc: 'Première bonne réponse' },
  { id: 'streak5', icon: '🔥', label: 'En feu', desc: '5 bonnes réponses d’affilée' },
  { id: 'streak10', icon: '⚡', label: 'Imbattable', desc: '10 bonnes réponses d’affilée' },
  { id: 'perfect', icon: '💯', label: 'Sans faute', desc: 'Un quiz réussi à 100 %' },
  { id: 'hard10', icon: '🧠', label: 'Cerveau', desc: '10 questions difficiles réussies' },
  { id: 'explorer', icon: '📚', label: 'Studax', desc: 'Toutes les fiches lues' },
  { id: 'xp500', icon: '⭐', label: '500 XP', desc: 'Atteindre 500 XP' },
  { id: 'xp1000', icon: '🏆', label: '1000 XP', desc: 'Atteindre 1000 XP' },
]

// Niveau à partir de l'XP (100 XP par niveau, progressif léger).
export function levelFromXp(xp) {
  const level = Math.floor(Math.sqrt(xp / 50)) + 1
  const cur = 50 * (level - 1) ** 2
  const next = 50 * level ** 2
  return { level, cur, next, pct: Math.round(((xp - cur) / (next - cur)) * 100) }
}
