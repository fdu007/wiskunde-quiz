# Fiche - Rekenregels van machten (G17-G20)

Matrix Wiskunde 2 - Getallenleer, hoofdstuk 4. Alles in het Nederlands.

## Woordenschat

| Nederlands | Symbool | Uitleg |
|---|---|---|
| **macht** | a^n | de macht |
| **grondtal** | a | het getal dat je vermenigvuldigt |
| **exponent** | n | hoeveel keer |
| **vierkantswortel** | √a | de vierkantswortel |
| **omgekeerde** | a^(-1) = 1/a | de omgekeerde |
| **tegengestelde** | -a | de tegengestelde |

> Herinnering: in `a^n` is het **grondtal** `a` en de **exponent** `n`.
> Voorbeeld: in `3^2` is het grondtal `3` en de exponent `2`. Let op: in `-8^2` is het grondtal `8` (niet `-8`), dus `-8^2 = -64`. Maar `(-8)^2 = 64`.

---

## De basisbegrippen (G17)

### Exponent 0
**Regel:** `a^0 = 1` (voor a ≠ 0)
**Voorbeeld:** `5^0 = 1`, `(-3)^0 = 1`, `15^0 = 1`
**Uitleg:** om het even welk getal (behalve 0) verheven tot de macht 0 geeft altijd 1.

### Exponent 1
**Regel:** `a^1 = a`
**Voorbeeld:** `8^1 = 8`, `125^1 = 125`
**Uitleg:** een getal tot de macht 1 blijft zichzelf.

### Negatieve exponent
**Regel:** `a^(-n) = 1/(a^n)` (voor a ≠ 0)
**Voorbeeld:** `2^(-3) = 1/(2^3) = 1/8`, `6^(-2) = 1/(6^2) = 1/36`
**Uitleg:** een negatieve exponent betekent "de **omgekeerde**". Je zet de macht naar de noemer en de exponent wordt opnieuw positief. Het grondtal wordt NIET negatief, het is de exponent die van teken verandert.

### Omgekeerde van een breuk
**Regel:** `(a/b)^(-1) = b/a`
**Voorbeeld:** `(2/3)^(-1) = 3/2`, `(2/3)^(-2) = (3/2)^2 = 9/4`
**Uitleg:** voor de omgekeerde van een breuk keer je de breuk om. Bij een negatieve exponent `-n` keer je eerst de breuk om en pas je daarna de positieve exponent `n` toe.

### Vierkantswortel
**Regel:** `√a` is het positieve getal waarvan het kwadraat `a` is. Dus `(√a)^2 = a`.
**Voorbeeld:** `√16 = 4` (want `4^2 = 16`), `√81 = 9`, `√144 = 12`
**Uitleg:** de vierkantswortel is de omgekeerde bewerking van het kwadraat. `√` kan ALLEEN berekend worden op positieve getallen of nul.

---

## De vijf rekenregels van machten

### 1. Machten met hetzelfde grondtal vermenigvuldigen (G18)
**Regel:** `a^m · a^n = a^(m+n)`
**Voorbeeld:** `5^3 · 5^2 = 5^(3+2) = 5^5`
**Uitleg:** wanneer je twee machten met **hetzelfde grondtal vermenigvuldigt**, behoud je het grondtal en **tel je de exponenten op**. Het grondtal moet identiek zijn, anders geldt de regel niet.

### 2. Machten met hetzelfde grondtal delen (G18)
**Regel:** `a^m : a^n = a^(m-n)` (voor a ≠ 0)
**Voorbeeld:** `9^8 : 9^6 = 9^(8-6) = 9^2 = 81`
**Uitleg:** wanneer je twee machten met **hetzelfde grondtal deelt**, behoud je het grondtal en **trek je de exponent van de deler af** (exponent deeltal - exponent deler). Let op dat je dit niet verwart met de vermenigvuldiging.

### 3. Een macht tot een macht verheffen (G19)
**Regel:** `(a^m)^n = a^(m·n)`
**Voorbeeld:** `(2^3)^4 = 2^(3·4) = 2^12`, `(5^(-1))^(-2) = 5^((-1)·(-2)) = 5^2 = 25`
**Uitleg:** wanneer je een macht tot een macht verheft, behoud je het grondtal en **vermenigvuldig je de exponenten**. Veelvoorkomende valkuil: hier vermenigvuldig je, terwijl je bij regel 1 optelt.

### 4. Een product tot een macht verheffen (G20)
**Regel:** `(a · b)^n = a^n · b^n`
**Voorbeeld:** `(2 · 5)^3 = 2^3 · 5^3`, `(3a)^2 = 3^2 · a^2 = 9a^2`
**Uitleg:** de exponent van een product verdeel je over **elke factor**. Elke factor in de haakjes krijgt de exponent.

### 5. Een quotiënt tot een macht verheffen (G20)
**Regel:** `(a/b)^n = a^n / b^n` (voor b ≠ 0)
**Voorbeeld:** `(2/5)^3 = 2^3 / 5^3 = 8/125`, `(-3/4)^2 = (-3)^2 / 4^2 = 9/16`
**Uitleg:** de exponent van een quotiënt (breuk) verdeel je over de teller ÉN de noemer.

---

## Samenvattende tabel (uit het hoofd te leren)

| Regel (NL) | Symbool | Bewerking op de exponenten |
|---|---|---|
| vermenigvuldigen, zelfde grondtal | `a^m · a^n = a^(m+n)` | **optellen** (+) |
| delen, zelfde grondtal | `a^m : a^n = a^(m-n)` | **aftrekken** (-) |
| macht tot een macht | `(a^m)^n = a^(m·n)` | **vermenigvuldigen** (×) |
| product tot een macht | `(a·b)^n = a^n · b^n` | **verdelen** |
| quotiënt tot een macht | `(a/b)^n = a^n / b^n` | **verdelen** |
| exponent 0 | `a^0 = 1` | - |
| negatieve exponent | `a^(-n) = 1/a^n` | omkeren (omgekeerde) |

**Niet door elkaar halen:**
- `a^m · a^n` (zelfde grondtal, je VERMENIGVULDIGT) → je TELT de exponenten OP.
- `(a^m)^n` (een macht VERHEVEN tot een macht) → je VERMENIGVULDIGT de exponenten.

---

## ⚠️ Volgorde van bewerkingen (jouw zwakke punt!)

Wanneer een berekening meerdere bewerkingen door elkaar gebruikt, moet je de volgorde respecteren. Dit is de meest voorkomende fout. Ga altijd in deze volgorde te werk:

1. **Haakjes** - je berekent eerst wat tussen de `( )` staat.
2. **Machten en wortels**.
3. **Maal en delen** (× en :), van links naar rechts.
4. **Plus en min** (+ en -), van links naar rechts.

Geheugensteun: **H** - **M/W** - **×/:** - **+/-**.

**Voorbeeld 1:** `1/2^2 + √16 - √81/3`
1. machten/wortels: `1/4 + 4 - 9/3`
2. delen: `9/3 = 3` → `1/4 + 4 - 3`
3. plus/min (links → rechts): `1/4 + 1 = 5/4`

**Voorbeeld 2:** `2 · (3 - 7)^2`
1. haakjes: `3 - 7 = -4` → `2 · (-4)^2`
2. macht: `(-4)^2 = 16` → `2 · 16`
3. maal: `= 32`

**Voorbeeld 3:** `2^0 - (2/3 - 1)^2 · 1/4`
1. haakjes: `2/3 - 1 = -1/3`
2. machten: `2^0 = 1` en `(-1/3)^2 = 1/9`
3. maal: `1/9 · 1/4 = 1/36`
4. min: `1 - 1/36 = 35/36`

> Tip: een `^0` of een `· 0` kan een heel blok doen verdwijnen, maar ALLEEN nadat je de haakjes hebt berekend. Sla nooit een stap over.

*Bron: Matrix Wiskunde 2, Getallenleer, p.224-267 (G17-G20).*
