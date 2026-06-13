# Fiche 5 - Congruentie (M17-M19)

Manuel : *Matrix Wiskunde 2 - Meetkunde*, chapitres M17, M18, M19.
Termes et énoncés en **néerlandais**, explications en **français**.

---

## 1. Congruente figuren (M17)

**Definitie - congruente figuren**
> Congruente figuren zijn figuren die door spiegeling, een verschuiving, een rotatie of een combinatie ervan op elkaar passen. Ze hebben dezelfde vorm en dezelfde grootte. Elke figuur is congruent met zichzelf.

Deux figures sont **congruentes** quand elles ont **la meme forme et la meme grandeur** (*zelfde vorm en zelfde grootte*), donc quand on peut les faire coincider parfaitement l'une sur l'autre (*op elkaar passen*) par une isometrie : symetrie (*spiegeling*), translation (*verschuiving*), rotation (*rotatie*) ou une combinaison.

**Symbole de congruence : ≅**
Notation : `figuur 1 ≅ figuur 2`. Le symbole ≅ se lit *is congruent met*.

### Congruente veelhoeken
Pour deux polygones congruents (*veelhoeken*), on a :
- **overeenkomstige zijden** (cotes correspondants) qui sont **even lang** (de meme longueur),
- **overeenkomstige hoeken** (angles correspondants) qui sont **even groot** (de meme amplitude).

> **Eigenschap** : twee veelhoeken zijn congruent als (en slechts als) de overeenkomstige zijden even lang zijn **en** de overeenkomstige hoeken even groot zijn.

Attention : dans la notation `vierhoek ABCD ≅ vierhoek A'B'C'D'`, l'ordre des lettres indique quels sommets se correspondent (A↔A', B↔B', ...). Donc `|AB| = |A'B'|`, angle A = angle A', etc.

---

## 2. Congruente driehoeken (M18)

Pour les triangles, on n'a **pas besoin de verifier les 6 elements** (3 cotes + 3 angles). Quelques donnees suffisent : ce sont les **congruentiekenmerken** (criteres / cas de congruence).

Notation : `Z` = *zijde* (cote), `H` = *hoek* (angle).

### Les congruentiekenmerken voor driehoeken (page 181 - a connaitre)

> Twee driehoeken zijn congruent als de volgende overeenkomstige elementen even groot zijn :

| Notation NL | Donnees necessaires (NL) | Explication FR |
|---|---|---|
| **ZZZ** | de drie zijden | Les **trois cotes** correspondants sont egaux deux a deux. |
| **HZH** | een zijde en twee hoeken (de twee hoeken liggen aan de zijde) | Un **cote** et les **deux angles** qui lui sont adjacents. |
| **ZHH = HHZ** | een zijde en twee hoeken (een aanliggende en een tegenoverliggende hoek) | Un **cote**, un angle adjacent et un angle oppose. Equivaut a HZH car si deux angles sont egaux, le troisieme l'est aussi (somme = 180°). |
| **ZHZ** | twee zijden en de ingesloten hoek | **Deux cotes** et l'angle **compris entre** ces deux cotes (*ingesloten hoek*). |
| **ZZ90°** | de rechte hoek, de schuine zijde (hypotenusa) en een rechthoekszijde | Triangle rectangle : l'**angle droit**, l'**hypotenuse** (*schuine zijde*) et un **cote de l'angle droit** (*rechthoekszijde*). |

### WEETJES (a retenir, pieges de l'examen)
- **HHH is geen congruentiekenmerk.** Trois angles egaux ne suffisent PAS : les triangles ont la meme forme mais peuvent avoir des grandeurs differentes (ils sont seulement *gelijkvormig*, semblables).
- **HZZ of ZZH zijn geen congruentiekenmerken, tenzij de hoek 90° is.** Deux cotes et un angle NON compris ne garantissent pas la congruence... sauf si cet angle est droit (c'est alors le cas ZZ90°).

Notation de la conclusion : `ΔABC ≅ ΔDEF`. L'ordre des lettres donne la correspondance des sommets.

---

## 3. Bewijzen met congruente driehoeken (M19)

But : prouver que des longueurs sont egales (*even lang*) ou que des angles sont egaux (*even groot*) en montrant d'abord que deux triangles sont congruents, puis en utilisant l'eigenschap : *overeenkomstige zijden en overeenkomstige hoeken in congruente driehoeken zijn even groot*.

### Stappenplan - bewijzen met congruente driehoeken

1. **Gegeven** (donne) : noter toutes les donnees en symboles ; faire ou marquer la figure avec des reperes verts (*groene merktekens*) pour les egalites donnees.
2. **Te bewijzen** (a demontrer) : noter en symboles ce qu'on veut prouver ; marquer en rouge (*rode merktekens*) sur la figure.
3. **Bewijs** (preuve) :
   - Lister les egalites de cotes (Z) et d'angles (H) entre les deux triangles, avec a chaque ligne la **justification** entre parentheses : `(gegeven)`, `(definitie / eigenschap / ...)`, `(gemeenschappelijke zijde)` = cote commun, `(overstaande hoeken)` = angles opposes par le sommet, etc.
   - Conclure quel **congruentiekenmerk** est rempli, dans le bon ordre (ZHZ, ZZZ, HZH, ZHH ou ZZ90°), donc : `ΔABC ≅ ΔDEF (congruentiekenmerk)`.
   - Conclure le resultat demande : `eigenschap : overeenkomstige zijden / hoeken in congruente driehoeken zijn even groot` → donc `|AB| = |DE|` (of de gelijke hoek).

### Justifications utiles (NL)
- `gegeven` : c'est une donnee.
- `gemeenschappelijke zijde` : cote partage par les deux triangles (donc egal a lui-meme).
- `overstaande hoeken` : angles opposes par le sommet (egaux).
- `verwisselende binnenhoeken` : angles alternes-internes (si droites paralleles).
- `som van de hoeken van een driehoek = 180°`.

> Astuce ordre : choisis le kenmerk selon ce que tu **as deja** ou ce qui est le plus rapide a etablir. Si tu connais 2 cotes et l'angle entre eux → ZHZ ; un cote et ses 2 angles → HZH ; les 3 cotes → ZZZ.
