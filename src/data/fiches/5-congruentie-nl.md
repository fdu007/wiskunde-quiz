# Blad 5 - Congruentie (M17-M19)

Handboek: *Matrix Wiskunde 2 - Meetkunde*, hoofdstukken M17, M18, M19.
Termen en uitspraken in het **Nederlands**.

---

## 1. Congruente figuren (M17)

**Definitie - congruente figuren**
> Congruente figuren zijn figuren die door spiegeling, een verschuiving, een rotatie of een combinatie ervan op elkaar passen. Ze hebben dezelfde vorm en dezelfde grootte. Elke figuur is congruent met zichzelf.

Twee figuren zijn **congruent** wanneer ze **dezelfde vorm en dezelfde grootte** hebben, dus wanneer je ze perfect op elkaar kunt laten passen door een isometrie: spiegeling, verschuiving, rotatie of een combinatie ervan.

**Congruentiesymbool: ≅**
Notatie: `figuur 1 ≅ figuur 2`. Het symbool ≅ lees je als *is congruent met*.

### Congruente veelhoeken
Voor twee congruente veelhoeken geldt:
- **overeenkomstige zijden** die **even lang** zijn,
- **overeenkomstige hoeken** die **even groot** zijn.

> **Eigenschap**: twee veelhoeken zijn congruent als (en slechts als) de overeenkomstige zijden even lang zijn **en** de overeenkomstige hoeken even groot zijn.

Let op: in de notatie `vierhoek ABCD ≅ vierhoek A'B'C'D'` geeft de volgorde van de letters aan welke hoekpunten met elkaar overeenkomen (A↔A', B↔B', ...). Dus `|AB| = |A'B'|`, hoek A = hoek A', enz.

---

## 2. Congruente driehoeken (M18)

Bij driehoeken hoef je **niet alle 6 elementen te controleren** (3 zijden + 3 hoeken). Enkele gegevens volstaan: dat zijn de **congruentiekenmerken**.

Notatie: `Z` = *zijde*, `H` = *hoek*.

### De congruentiekenmerken voor driehoeken (pagina 181 - te kennen)

> Twee driehoeken zijn congruent als de volgende overeenkomstige elementen even groot zijn:

| Notatie NL | Nodige gegevens (NL) | Uitleg |
|---|---|---|
| **ZZZ** | de drie zijden | De **drie zijden** komen twee aan twee overeen en zijn gelijk. |
| **HZH** | een zijde en twee hoeken (de twee hoeken liggen aan de zijde) | Een **zijde** en de **twee hoeken** die eraan liggen. |
| **ZHH = HHZ** | een zijde en twee hoeken (een aanliggende en een tegenoverliggende hoek) | Een **zijde**, een aanliggende hoek en een tegenoverliggende hoek. Komt overeen met HZH, want als twee hoeken gelijk zijn, is de derde dat ook (som = 180°). |
| **ZHZ** | twee zijden en de ingesloten hoek | **Twee zijden** en de hoek die **ingesloten** ligt tussen die twee zijden (*ingesloten hoek*). |
| **ZZ90°** | de rechte hoek, de schuine zijde (hypotenusa) en een rechthoekszijde | Rechthoekige driehoek: de **rechte hoek**, de **schuine zijde** (hypotenusa) en een **rechthoekszijde**. |

### WEETJES (te onthouden, valstrikken op het examen)
- **HHH is geen congruentiekenmerk.** Drie gelijke hoeken volstaan NIET: de driehoeken hebben dezelfde vorm maar kunnen verschillende groottes hebben (ze zijn enkel *gelijkvormig*).
- **HZZ of ZZH zijn geen congruentiekenmerken, tenzij de hoek 90° is.** Twee zijden en een NIET-ingesloten hoek garanderen de congruentie niet... behalve als die hoek recht is (dan is het het geval ZZ90°).

Notatie van het besluit: `ΔABC ≅ ΔDEF`. De volgorde van de letters geeft de overeenkomst van de hoekpunten.

---

## 3. Bewijzen met congruente driehoeken (M19)

Doel: bewijzen dat lengten **even lang** zijn of dat hoeken **even groot** zijn door eerst aan te tonen dat twee driehoeken congruent zijn, en daarna de eigenschap te gebruiken: *overeenkomstige zijden en overeenkomstige hoeken in congruente driehoeken zijn even groot*.

### Stappenplan - bewijzen met congruente driehoeken

1. **Gegeven**: noteer alle gegevens in symbolen; maak of duid de figuur aan met groene merktekens (*groene merktekens*) voor de gegeven gelijkheden.
2. **Te bewijzen**: noteer in symbolen wat je wilt bewijzen; duid het in het rood aan (*rode merktekens*) op de figuur.
3. **Bewijs**:
   - Som de gelijkheden van zijden (Z) en hoeken (H) tussen de twee driehoeken op, met op elke regel de **verantwoording** tussen haakjes: `(gegeven)`, `(definitie / eigenschap / ...)`, `(gemeenschappelijke zijde)`, `(overstaande hoeken)`, enz.
   - Besluit welk **congruentiekenmerk** vervuld is, in de juiste volgorde (ZHZ, ZZZ, HZH, ZHH of ZZ90°), dus: `ΔABC ≅ ΔDEF (congruentiekenmerk)`.
   - Besluit het gevraagde resultaat: `eigenschap: overeenkomstige zijden / hoeken in congruente driehoeken zijn even groot` → dus `|AB| = |DE|` (of de gelijke hoek).

### Nuttige verantwoordingen (NL)
- `gegeven`: het is een gegeven.
- `gemeenschappelijke zijde`: zijde die door beide driehoeken gedeeld wordt (dus gelijk aan zichzelf).
- `overstaande hoeken`: overstaande hoeken (gelijk).
- `verwisselende binnenhoeken`: verwisselende binnenhoeken (als de rechten evenwijdig zijn).
- `som van de hoeken van een driehoek = 180°`.

> Tip volgorde: kies het kenmerk volgens wat je **al hebt** of wat het snelst vast te stellen is. Als je 2 zijden en de ingesloten hoek kent → ZHZ; een zijde en zijn 2 hoeken → HZH; de 3 zijden → ZZZ.
