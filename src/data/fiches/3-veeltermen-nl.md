# Eentermen en veeltermen + Merkwaardige producten (G21-G28)

> Fiche volledig in het Nederlands.

---

## 1. Eenterm — G21

Een **eenterm** is een product van getallen en letters, zonder `+` of `-` erin.
Voorbeelden: `5a`, `gh`, `-1,5x²`, `7xy`.

Elke eenterm heeft drie delen:

| Nederlands | Uitleg | Voorbeeld in `-1,5x²` |
|---|---|---|
| **coëfficiënt** | het getal vooraan | `-1,5` |
| **lettergedeelte** | het deel met de letters | `x²` |
| **graad** | de graad = som van de exponenten van de letters | `2` |

Nuttige regels:
- Een eenterm die enkel een getal is (`7`) heeft **graad 0**.
- `10` is een eenterm, maar `10 = 0` is dat niet.

---

## 2. Veelterm — G21

Een **veelterm** is een som van meerdere eentermen.
- `2z + 3` heeft **2 termen** → een **tweeterm**.
- `9a - 3b + 6c` heeft **3 termen** → een **drieterm**.

De **graad van een veelterm** = de hoogste graad onder zijn termen.
Voorbeeld: `14a² - 12x + a` → graad **2**.

**Getalwaarde**: je vervangt de letter door een getal en je rekent uit.
Voor `2x² - 5x + 2` met `x = 2` → `2·4 - 5·2 + 2 = 8 - 10 + 2 = 0`.

---

## 3. Gelijksoortige termen — G22 / G25

**Gelijksoortige termen** hebben **exact hetzelfde lettergedeelte** (zelfde letters, zelfde exponenten).
- `3a` en `5a` → gelijksoortig ✅
- `3a²` en `5a` → **niet** gelijksoortig ❌ (de ene is `a²`, de andere `a`)

### Optellen en aftrekken
Je telt op of trekt af **enkel de coëfficiënten**; het lettergedeelte **verandert niet**.

`5a + 3b - 7a = (5a - 7a) + 3b = -2a + 3b`

> ⚠️ **Je telt NOOIT het lettergedeelte op.** `5a + 3a = 8a`, niet `8a²`.

---

## 4. ⚠️ Het teken `-` voor haakjes

Dit is valkuil nr. 1. Een `-` voor haakjes **verandert ALLE tekens erin**.

`5a - (3b + 7a - 5)`
`= 5a - 3b - 7a + 5`   ← elk teken werd omgekeerd
`= -2a - 3b + 5`

Truc: stel je voor dat de `-` een `·(-1)` is die zich overal verdeelt.

---

## 5. Eentermen vermenigvuldigen — G23

Je vermenigvuldigt **de coëfficiënten met elkaar** ÉN **de lettergedeelten met elkaar** (je telt de exponenten van dezelfde letters op).

`3a · 7a = (3·7)·(a·a) = 21a²`
`-5b² · -2b = +10b³`

> ⚠️ Tekenregel: `+·+ = +`, `-·- = +`, `+·- = -`.

---

## 6. Macht van een eenterm — G24

Je verheft **elke factor** tot de macht: je zet de coëfficiënt tot de macht ÉN je vermenigvuldigt de exponenten van de letters.

`(a·xᵐ)ⁿ = aⁿ · xᵐ·ⁿ`

Voorbeelden:
`(5a²)³ = 5³·a⁶ = 125a⁶`
`(-2x³)⁴ = (-2)⁴·x¹² = +16x¹²` (even exponent → positief resultaat)
`(-2x³)³ = (-2)³·x⁹ = -8x⁹` (oneven exponent → negatief resultaat)

---

## 7. Veeltermen vermenigvuldigen — G26

### Eenterm × veelterm
Je verdeelt de eenterm over **elke** term (distributiviteit).
`3a·(4a + b - 5) = 12a² + 3ab - 15a`

### Veelterm × veelterm
**Elke** term van de eerste haakjes vermenigvuldigt **elke** term van de tweede, daarna groepeer je de gelijksoortige termen.
`(2a + 3)(a - 5) = 2a² - 10a + 3a - 15 = 2a² - 7a - 15`

---

## 8. ⚠️ Volgorde van bewerkingen

Wanneer er een product **en** een aftrekking is, doe je **EERST de producten**, pas daarna de optelling/aftrekking.

`(a - 3)(a + 1) - (a + 2)·a`

Stap 1 — elk product apart berekenen:
- `(a - 3)(a + 1) = a² + a - 3a - 3 = a² - 2a - 3`
- `(a + 2)·a = a² + 2a`

Stap 2 — aftrekken, **met de haakjes voor de `-`**:
`= (a² - 2a - 3) - (a² + 2a)`
`= a² - 2a - 3 - a² - 2a`   ← de `-` verandert de tekens van `a² + 2a`
`= -4a - 3`

> ⚠️ Trek nooit af voordat je de producten hebt uitgewerkt. En zet altijd haakjes rond het 2e product voordat je de `-` wegwerkt.

---

## 9. Merkwaardige producten — G27 / G28

Drie formules om **uit het hoofd** te kennen. Ze besparen je het volledig uitwerken.

### a) Kwadraat van een tweeterm — `(a + b)²`
$$(a + b)^2 = a^2 + 2ab + b^2$$
- kwadraat van de **1e** term: `a²`
- **dubbelproduct** van de twee termen: `2ab`
- kwadraat van de **2e** term: `b²`

Bewijs via de **oppervlakte** (oppervlakte van een vierkant met zijde `a + b`):
het grote vierkant wordt opgedeeld in `a²` + `ab` + `ab` + `b²` = `a² + 2ab + b²`.

### b) Kwadraat van een tweeterm met een `-` — `(a - b)²`
$$(a - b)^2 = a^2 - 2ab + b^2$$
**Enkel het dubbelproduct is negatief.** De twee kwadraten blijven **positief** (`b²` is altijd `+`).

Voorbeeld: `(x - 3)² = x² - 6x + 9`.

### c) Product van toegevoegde tweetermen — `(a + b)(a - b)`
Twee **toegevoegde** tweetermen = zelfde termen, tegengesteld teken in het midden.
$$(a + b)(a - b) = a^2 - b^2$$
kwadraat van de 1e term **min** kwadraat van de 2e term. **Geen dubbelproduct** (het valt weg).

Voorbeeld: `(x + 5)(x - 5) = x² - 25`.

---

## 10. ⚠️ De drie formules niet door elkaar halen

| Vorm | Resultaat | Hoeveel termen? |
|---|---|---|
| `(a + b)²` | `a² + 2ab + b²` | 3 termen, `+` in het midden |
| `(a - b)²` | `a² - 2ab + b²` | 3 termen, `-` in het midden |
| `(a + b)(a - b)` | `a² - b²` | **maar 2 termen** |

> ⚠️ Veelvoorkomende valkuilen:
> - `(a + b)² ≠ a² + b²`. **Het `2ab` ontbreekt altijd**!
> - `(a - b)²`: het `b²` blijft **positief**, nooit `-b²`.
> - `(a + b)(a - b)`: er is **GEEN** middelste term, het is `a² - b²`.

---

## 11. ⚠️ Toepassing op de meetkunde — G21 tot G26

Dit is een klassieke testvraag: een maat uitdrukken als **veelterm**.

### Rechthoek — lengte `l`, breedte `b`
- **omtrek**: `O = 2l + 2b`
- **oppervlakte**: `A = l · b`

Voorbeeld: rechthoek met lengte `(x + 3)` en breedte `4`:
`A = 4·(x + 3) = 4x + 12`
`O = 2·(x + 3) + 2·4 = 2x + 6 + 8 = 2x + 14`

### Balk — lengte `l`, breedte `b`, hoogte `h`
- **volume**: `V = l · b · h`

Voorbeeld: `l = (x + 2)`, `b = x`, `h = 3`:
`V = (x + 2)·x·3 = 3·(x² + 2x) = 3x² + 6x`

### Vierkant — zijde `(a + b)`
- **oppervlakte**: `A = (a + b)² = a² + 2ab + b²` (daarom is het merkwaardig product nuttig in de meetkunde).

> ⚠️ Werk het product altijd volledig uit (volgorde van bewerkingen) en groepeer de gelijksoortige termen om de uiteindelijke veelterm te geven.

---

## Snelle memo

1. `-` voor `(...)` → **alle** tekens veranderen.
2. Producten **vóór** som/verschil; zet opnieuw haakjes rond een product vóór een `-`.
3. `(a+b)² = a²+2ab+b²` · `(a-b)² = a²-2ab+b²` · `(a+b)(a-b) = a²-b²`.
4. Meetkunde: `A_rechthoek = l·b`, `O = 2l+2b`, `V_balk = l·b·h` → werk uit tot een veelterm.
