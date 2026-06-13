// Les cours (matières) disponibles. Le menu d'accueil laisse choisir.
export const COURSES = [
  {
    key: 'wiskunde',
    label: 'Wiskunde',
    fr: 'Mathématiques',
    icon: '📐',
    color: '#2563eb',
    tagline: { nl: 'Getallenleer & Meetkunde', fr: 'Algèbre & géométrie' },
  },
  {
    key: 'geschiedenis',
    label: 'Geschiedenis',
    fr: 'Histoire',
    icon: '🏛️',
    color: '#b45309',
    tagline: { nl: 'Hellas & Rome', fr: 'Grèce antique & Rome' },
  },
]

export const courseByKey = Object.fromEntries(COURSES.map((c) => [c.key, c]))
