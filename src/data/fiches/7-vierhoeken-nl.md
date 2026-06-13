# Samenvattingsblad: Eigenschappen van vierhoeken (M25-M27)

> Matrix Wiskunde 2 - Meetkunde, p.293-335. Termen en uitspraken in het **Nederlands** (zoals op het examen). Veel succes met de herhaling, Corentin!

---

## 1. De som van de hoeken - p.294

**Eigenschap**: *De som van de hoeken in een vierhoek is gelijk aan 360°.*

In elke vierhoek ABCD:

$$\hat{A} + \hat{B} + \hat{C} + \hat{D} = 360°$$

Tip: een vierhoek wordt door een diagonaal in twee driehoeken verdeeld, en elke driehoek is 180°, dus 2 × 180° = 360°.

Om een ontbrekende hoek te vinden: tel de gekende hoeken op en trek ze af van 360°.

---

## 2. Definities - p.295-296

| NL | Definitie |
|---|---|
| **trapezium** | een vierhoek met **minstens één paar** evenwijdige zijden (`[AB] // [DC]`) |
| **gelijkbenig trapezium** | gelijkbenig trapezium: de niet-evenwijdige zijden zijn even lang |
| **rechthoekig trapezium** | rechthoekig trapezium: het heeft een rechte hoek |
| **parallellogram** | een vierhoek met **twee paren** evenwijdige zijden |
| **rechthoek** | een parallellogram met **rechte hoeken** |
| **ruit** | een vierhoek met **vier even lange zijden** |
| **vierkant** | een vierhoek met **rechte hoeken ÉN vier gelijke zijden** (zowel rechthoek als ruit) |
| **vlieger** | een vierhoek met twee paren opeenvolgende even lange zijden |

---

## 3. Samenvattende tabel van de eigenschappen

Legende: **zijden**, **hoeken**, **diagonalen**.
- *evenwijdig* = parallel; *even lang / gelijk* = van dezelfde lengte / gelijk
- *snijden elkaar middendoor* = snijden elkaar in hun midden
- *staan loodrecht op elkaar* = staan loodrecht op elkaar
- *overstaande* = tegenover elkaar; *opeenvolgende* = opeenvolgend

| Vierhoek | Zijden | Hoeken | Diagonalen |
|---|---|---|---|
| **Parallellogram** | overstaande zijden evenwijdig **én** even lang | overstaande hoeken gelijk | snijden elkaar middendoor |
| **Rechthoek** | overstaande zijden evenwijdig én even lang | alle hoeken = 90° | snijden elkaar middendoor **én even lang** (gelijk) |
| **Ruit** | alle zijden even lang (overstaande evenwijdig) | overstaande hoeken gelijk | snijden elkaar middendoor, **loodrecht op elkaar** + bissectrices van de hoeken |
| **Vierkant** | alle zijden even lang, overstaande evenwijdig | alle hoeken = 90° | snijden elkaar middendoor, **even lang ÉN loodrecht** |
| **Trapezium** | minstens één paar evenwijdige zijden | - | - |

Opmerking: het **vierkant** combineert ALLES (het is zowel een rechthoek als een ruit), dus zijn diagonalen zijn tegelijk **gelijk** (zoals de rechthoek) **en** **loodrecht** (zoals de ruit).

---

## 4. Detail per type

**Parallellogram** (`AB // CD` en `AD // BC`)
- overstaande zijden zijn evenwijdig én even lang: `|AB| = |CD|` en `|AD| = |BC|`
- overstaande hoeken gelijk: `Â = Ĉ` en `B̂ = D̂`
- diagonalen snijden elkaar middendoor: `|AM| = |MC|` en `|BM| = |MD|`

**Rechthoek**: een parallellogram met vier rechte hoeken.
- `Â = B̂ = Ĉ = D̂ = 90°`
- bovendien: **de diagonalen zijn even lang**: `|AC| = |BD|`

**Ruit**: een vierhoek met vier gelijke zijden.
- `|AB| = |BC| = |CD| = |DA|`
- diagonalen **staan loodrecht op elkaar**: `[AC] ⊥ [BD]`
- de diagonalen zijn de bissectrices van de hoeken

**Vierkant**: zowel rechthoek ÉN ruit.
- vier hoeken van 90° **en** vier gelijke zijden
- diagonalen: `|AC| = |BD|` **en** `[AC] ⊥ [BD]`

---

## 5. Constructie & symmetrieassen (M26) - p.308-325

**Constructie**: om een precieze vierhoek te construeren, combineer je zijn eigenschappen met de **passer** en de **geodriehoek** - bijvoorbeeld gelijke lengten uitzetten voor een ruit, rechte hoeken tekenen voor een rechthoek. De **classificatie** (hieronder, sectie 6) dient om te herkennen om welke vierhoek het gaat aan de hand van zijn zijden, hoeken en diagonalen.

### Symmetrieassen - p.318

| Vierhoek | Aantal symmetrieassen |
|---|---|
| **vierkant** | 4 |
| **rechthoek** | ten minste 2 |
| **ruit** | ten minste 2 |
| **vlieger** | ten minste 1 |
| **parallellogram** (algemeen) | 0 |
| **gelijkbenig trapezium** | 1 |

We zeggen *ten minste* omdat een vierkant ook een rechthoek en een ruit is: het heeft dus meer assen dan het minimum.

---

## 6. Hiërarchie / classificatie - p.319, M27

De familie schuift in elkaar. Een implicatie `⇒` betekent "als... dan...":

- **vierkant ⇒ rechthoek** en **vierkant ⇒ ruit** (elk vierkant is een rechthoek en een ruit)
- **rechthoek ⇒ parallellogram**; **ruit ⇒ parallellogram**
- **parallellogram ⇒ trapezium** (een parallellogram heeft twee paren evenwijdige zijden, dus minstens één)

Let op de omgekeerde implicaties (ze zijn **niet** altijd waar):
- een parallellogram is niet noodzakelijk een rechthoek (`parallellogram ⇏ rechthoek`)
- een trapezium is niet noodzakelijk een parallellogram

**Nuttige herkenningscriteria** (M27):
- Vierhoek met overstaande zijden even lang ⇔ **parallellogram**
- Parallellogram waarvan de diagonalen even lang zijn ⇔ **rechthoek**
- Parallellogram waarvan de diagonalen loodrecht op elkaar staan ⇔ **ruit**
- Vierhoek met gelijke én loodrechte diagonalen die elkaar middendoor snijden ⇒ **vierkant**

---

## Snelmemo

- Som van de hoeken van een vierhoek = **360°**
- **Gelijke diagonalen** → familie rechthoek/vierkant
- **Loodrechte diagonalen** → familie ruit/vierkant
- **Diagonalen die elkaar middendoor snijden** → alle parallellogrammen
- **vierkant** = de kampioen: het heeft alle eigenschappen
