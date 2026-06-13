// Thèmes par cours. `course` relie au cours (voir courses.js).
// `weak` = point faible repéré dans les tests (mis en avant dans le "Défi examen").

const WISKUNDE = [
  { key: 'evenredigheden', course: 'wiskunde', title: 'Evenredigheden & schijfdiagrammen', fr: 'Proportions & diagrammes', chapters: 'G11 - G16', icon: '⚖️', color: '#2563eb', fiche: '1-evenredigheden', weak: true },
  { key: 'machten', course: 'wiskunde', title: 'Rekenregels van machten', fr: 'Puissances', chapters: 'G17 - G20', icon: '🔢', color: '#7c3aed', fiche: '2-machten', weak: true },
  { key: 'veeltermen', course: 'wiskunde', title: 'Eentermen & veeltermen', fr: 'Monômes & polynômes', chapters: 'G21 - G28', icon: '➗', color: '#db2777', fiche: '3-veeltermen', weak: true },
  { key: 'hoeken', course: 'wiskunde', title: 'Hoeken', fr: 'Les angles', chapters: 'M12 - M16', icon: '📐', color: '#ea580c', fiche: '4-hoeken', weak: false },
  { key: 'congruentie', course: 'wiskunde', title: 'Congruentie', fr: 'La congruence', chapters: 'M17 - M19', icon: '🔺', color: '#16a34a', fiche: '5-congruentie', weak: false },
  { key: 'driehoeken', course: 'wiskunde', title: 'Driehoeken', fr: 'Triangles', chapters: 'M20 - M24', icon: '📏', color: '#0891b2', fiche: '6-driehoeken', weak: false },
  { key: 'vierhoeken', course: 'wiskunde', title: 'Vierhoeken', fr: 'Quadrilatères', chapters: 'M25 - M27', icon: '⬛', color: '#ca8a04', fiche: '7-vierhoeken', weak: false },
]

const GESCHIEDENIS = [
  { key: 'h1-goden-religie', course: 'geschiedenis', title: 'Goden & religie', fr: 'Dieux & religion', chapters: 'Hellas', icon: '⚡', color: '#7c3aed', fiche: 'h1-goden-religie', weak: false },
  { key: 'h2-olympische-spelen', course: 'geschiedenis', title: 'Olympische Spelen', fr: 'Jeux olympiques', chapters: 'Hellas', icon: '🏅', color: '#0891b2', fiche: 'h2-olympische-spelen', weak: false },
  { key: 'h3-filosofie', course: 'geschiedenis', title: 'Filosofie', fr: 'Philosophie', chapters: 'Hellas', icon: '🦉', color: '#4338ca', fiche: 'h3-filosofie', weak: false },
  { key: 'h4-kunst', course: 'geschiedenis', title: 'Kunst & bouwkunst', fr: 'Art & architecture', chapters: 'Hellas', icon: '🏺', color: '#ca8a04', fiche: 'h4-kunst', weak: false },
  { key: 'h5-sparta', course: 'geschiedenis', title: 'Sparta', fr: 'Sparte', chapters: 'Hellas', icon: '🛡️', color: '#b91c1c', fiche: 'h5-sparta', weak: false },
  { key: 'h6-oorlog-hellenisme', course: 'geschiedenis', title: 'Oorlog & Hellenisme', fr: 'Guerres & hellénisme', chapters: 'Hellas', icon: '⚔️', color: '#ea580c', fiche: 'h6-oorlog-hellenisme', weak: false },
  { key: 'h7-rome-politiek', course: 'geschiedenis', title: 'Rome - politiek', fr: 'Rome - politique', chapters: 'Rome', icon: '🏛️', color: '#16a34a', fiche: 'h7-rome-politiek', weak: false },
  { key: 'h8-rome-maatschappij', course: 'geschiedenis', title: 'Rome - samenleving', fr: 'Rome - société & culture', chapters: 'Rome', icon: '🏟️', color: '#db2777', fiche: 'h8-rome-maatschappij', weak: false },
  { key: 'h9-algemeen', course: 'geschiedenis', title: 'Algemeen', fr: 'Repères, sources & carte', chapters: 'Vaardigheden', icon: '🗺️', color: '#0d9488', fiche: 'h9-algemeen', weak: false },
]

export const THEMES = [...WISKUNDE, ...GESCHIEDENIS]
export const themeByKey = Object.fromEntries(THEMES.map((t) => [t.key, t]))
export const themesForCourse = (course) => THEMES.filter((t) => t.course === course)
