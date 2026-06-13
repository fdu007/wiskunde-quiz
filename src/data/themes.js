// Métadonnées des thèmes. L'ordre suit la liste d'examen (Getallenleer puis Meetkunde).
// `fiche` = nom du fichier markdown importé dans Fiches.jsx.
// `weak` = point faible repéré dans les tests de Corentin (mis en avant dans le "Défi examen").

export const THEMES = [
  {
    key: 'evenredigheden',
    title: 'Evenredigheden & schijfdiagrammen',
    fr: 'Proportions & diagrammes circulaires',
    chapters: 'G11 - G16',
    icon: '⚖️',
    color: '#2563eb',
    fiche: '1-evenredigheden',
    weak: true,
  },
  {
    key: 'machten',
    title: 'Rekenregels van machten',
    fr: 'Règles de calcul des puissances',
    chapters: 'G17 - G20',
    icon: '🔢',
    color: '#7c3aed',
    fiche: '2-machten',
    weak: true,
  },
  {
    key: 'veeltermen',
    title: 'Eentermen & veeltermen',
    fr: 'Monômes & polynômes (produits remarquables)',
    chapters: 'G21 - G28',
    icon: '➗',
    color: '#db2777',
    fiche: '3-veeltermen',
    weak: true,
  },
  {
    key: 'hoeken',
    title: 'Hoeken',
    fr: 'Les angles',
    chapters: 'M12 - M16',
    icon: '📐',
    color: '#ea580c',
    fiche: '4-hoeken',
    weak: false,
  },
  {
    key: 'congruentie',
    title: 'Congruentie',
    fr: 'La congruence',
    chapters: 'M17 - M19',
    icon: '🔺',
    color: '#16a34a',
    fiche: '5-congruentie',
    weak: false,
  },
  {
    key: 'driehoeken',
    title: 'Driehoeken',
    fr: 'Médiatrice, bissectrice & triangles',
    chapters: 'M20 - M24',
    icon: '📏',
    color: '#0891b2',
    fiche: '6-driehoeken',
    weak: false,
  },
  {
    key: 'vierhoeken',
    title: 'Vierhoeken',
    fr: 'Les quadrilatères',
    chapters: 'M25 - M27',
    icon: '⬛',
    color: '#ca8a04',
    fiche: '7-vierhoeken',
    weak: false,
  },
]

export const themeByKey = Object.fromEntries(THEMES.map((t) => [t.key, t]))
