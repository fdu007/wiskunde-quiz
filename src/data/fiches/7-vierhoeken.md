# Fiche de révision : Eigenschappen van vierhoeken (M25-M27)

> Matrix Wiskunde 2 - Meetkunde, p.293-335. Termes et énoncés en **néerlandais** (comme à l'examen), explications en **français**. Bonne révision Corentin !

---

## 1. De som van de hoeken (la somme des angles) - p.294

**Eigenschap** : *De som van de hoeken in een vierhoek is gelijk aan 360°.*

Dans tout quadrilatère ABCD :

$$\hat{A} + \hat{B} + \hat{C} + \hat{D} = 360°$$

Astuce : un vierhoek se découpe en deux driehoeken (triangles) par une diagonale, et chaque triangle fait 180°, donc 2 × 180° = 360°.

Pour trouver un angle manquant : on additionne les angles connus et on soustrait de 360°.

---

## 2. Definities (les définitions) - p.295-296

| NL | Définition (FR) |
|---|---|
| **trapezium** | un vierhoek avec **au moins une paire** de côtés parallèles (`[AB] // [DC]`) |
| **gelijkbenig trapezium** | trapèze **isocèle** : les côtés non parallèles sont de même longueur |
| **rechthoekig trapezium** | trapèze **rectangle** : il a un angle droit |
| **parallellogram** | un vierhoek avec **deux paires** de côtés parallèles |
| **rechthoek** (rectangle) | un parallellogram avec **des angles droits** |
| **ruit** (losange) | un vierhoek avec **quatre côtés de même longueur** |
| **vierkant** (carré) | un vierhoek avec **des angles droits ET quatre côtés égaux** (à la fois rechthoek et ruit) |
| **vlieger** (cerf-volant) | un vierhoek avec deux paires de côtés consécutifs égaux |

---

## 3. Tableau récapitulatif des eigenschappen

Legende : **zijden** = côtés, **hoeken** = angles, **diagonalen** = diagonales.
- *evenwijdig* = parallèle ; *even lang / gelijk* = de même longueur / égaux
- *snijden elkaar middendoor* = se coupent en leur milieu
- *staan loodrecht op elkaar* = sont perpendiculaires
- *overstaande* = opposés ; *opeenvolgende* = consécutifs

| Vierhoek | Zijden (côtés) | Hoeken (angles) | Diagonalen (diagonales) |
|---|---|---|---|
| **Parallellogram** | overstaande zijden evenwijdig **én** even lang | overstaande hoeken gelijk | snijden elkaar middendoor |
| **Rechthoek** | overstaande zijden evenwijdig én even lang | alle hoeken = 90° | snijden elkaar middendoor **én even lang** (gelijk) |
| **Ruit** | alle zijden even lang (overstaande evenwijdig) | overstaande hoeken gelijk | snijden elkaar middendoor, **loodrecht op elkaar** + bissectrices des angles |
| **Vierkant** | alle zijden even lang, overstaande evenwijdig | alle hoeken = 90° | snijden elkaar middendoor, **even lang ÉN loodrecht** |
| **Trapezium** | minstens één paar evenwijdige zijden | - | - |

Note : le **vierkant** cumule TOUT (c'est à la fois un rechthoek et une ruit), donc ses diagonales sont à la fois **égales** (comme le rectangle) **et** **perpendiculaires** (comme le losange).

---

## 4. Détail par type

**Parallellogram** (`AB // CD` et `AD // BC`)
- overstaande zijden zijn evenwijdig én even lang : `|AB| = |CD|` et `|AD| = |BC|`
- overstaande hoeken gelijk : `Â = Ĉ` et `B̂ = D̂`
- diagonalen snijden elkaar middordoor : `|AM| = |MC|` et `|BM| = |MD|`

**Rechthoek** : un parallellogram avec quatre angles droits.
- `Â = B̂ = Ĉ = D̂ = 90°`
- en plus : **les diagonales sont égales** : `|AC| = |BD|`

**Ruit** (losange) : un vierhoek avec quatre côtés égaux.
- `|AB| = |BC| = |CD| = |DA|`
- diagonalen **staan loodrecht op elkaar** : `[AC] ⊥ [BD]`
- les diagonales sont les bissectrices des angles

**Vierkant** (carré) : à la fois rechthoek ET ruit.
- quatre angles de 90° **et** quatre côtés égaux
- diagonales : `|AC| = |BD|` **et** `[AC] ⊥ [BD]`

---

## 5. Constructie & symmetrieassen (M26) - p.308-325

**Constructie (construction)** : pour construire un vierhoek précis, on combine ses eigenschappen avec le **passer** (compas) et la **geodriehoek** (équerre/rapporteur) - par exemple reporter des longueurs égales pour une ruit, tracer des angles droits pour un rechthoek. La **classificatie** (ci-dessous, section 6) sert à reconnaître de quel vierhoek il s'agit d'après ses côtés, angles et diagonales.

### Symmetrieassen (axes de symétrie) - p.318

| Vierhoek | Aantal symmetrieassen (nombre d'axes) |
|---|---|
| **vierkant** | 4 |
| **rechthoek** | ten minste 2 (au moins 2) |
| **ruit** | ten minste 2 |
| **vlieger** | ten minste 1 |
| **parallellogram** (algemeen) | 0 |
| **gelijkbenig trapezium** | 1 |

On dit *ten minste* (au moins) car un vierkant est aussi un rechthoek et une ruit : il a donc plus d'axes que le minimum.

---

## 6. Hiërarchie / classificatie - p.319, M27

La famille s'emboîte. Une implication `⇒` signifie "si... alors..." :

- **vierkant ⇒ rechthoek** et **vierkant ⇒ ruit** (tout carré est un rectangle et un losange)
- **rechthoek ⇒ parallellogram** ; **ruit ⇒ parallellogram**
- **parallellogram ⇒ trapezium** (un parallélogramme a deux paires de côtés parallèles, donc au moins une)

Attention aux réciproques (elles ne sont **pas** toujours vraies) :
- un parallellogram n'est pas forcément un rechthoek (`parallellogram ⇏ rechthoek`)
- un trapezium n'est pas forcément un parallellogram

**Critères de reconnaissance utiles** (M27) :
- Vierhoek met overstaande zijden even lang ⇔ **parallellogram**
- Parallellogram waarvan de diagonalen even lang zijn ⇔ **rechthoek**
- Parallellogram waarvan de diagonalen loodrecht op elkaar staan ⇔ **ruit**
- Vierhoek met gelijke én loodrechte diagonalen die elkaar middendoor snijden ⇒ **vierkant**

---

## Mémo express

- Somme des angles d'un vierhoek = **360°**
- **Diagonales égales** → famille rechthoek/vierkant
- **Diagonales perpendiculaires** → famille ruit/vierkant
- **Diagonales qui se coupent en leur milieu** → tous les parallellogrammen
- **vierkant** = le champion : il a toutes les eigenschappen
