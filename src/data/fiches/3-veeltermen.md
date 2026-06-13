# Eentermen en veeltermen + Merkwaardige producten (G21-G28)

> Fiche bilingue : les termes mathématiques sont en **néerlandais** (comme à l'école), les explications sont en **français**.

---

## 1. Eenterm (le monôme) — G21

Une **eenterm** est un produit de getallen (nombres) et de letters (lettres), sans `+` ni `-` à l'intérieur.
Exemples : `5a`, `gh`, `-1,5x²`, `7xy`.

Chaque eenterm a trois parties :

| Néerlandais | Français | Exemple dans `-1,5x²` |
|---|---|---|
| **coëfficiënt** | le nombre devant | `-1,5` |
| **lettergedeelte** | la partie avec les lettres | `x²` |
| **graad** | le degré = somme des exposants des lettres | `2` |

Règles utiles :
- Une eenterm qui est juste un nombre (`7`) a pour **graad 0**.
- `10` est une eenterm, mais `10 = 0` ne l'est pas.

---

## 2. Veelterm (le polynôme) — G21

Une **veelterm** est une somme de plusieurs eentermen.
- `2z + 3` a **2 termen** → een **tweeterm** (binôme).
- `9a - 3b + 6c` a **3 termen** → een **drieterm** (trinôme).

La **graad van een veelterm** = la graad la plus haute parmi ses termen.
Exemple : `14a² - 12x + a` → graad **2**.

**Getalwaarde** (valeur numérique) : on remplace la lettre par un nombre et on calcule.
Pour `2x² - 5x + 2` avec `x = 2` → `2·4 - 5·2 + 2 = 8 - 10 + 2 = 0`.

---

## 3. Gelijksoortige termen (termes semblables) — G22 / G25

Des **gelijksoortige termen** ont **exactement le même lettergedeelte** (mêmes lettres, mêmes exposants).
- `3a` et `5a` → gelijksoortig ✅
- `3a²` et `5a` → **pas** gelijksoortig ❌ (un est `a²`, l'autre `a`)

### Optellen en aftrekken (additionner / soustraire)
On additionne ou soustrait **seulement les coëfficiënten** ; le lettergedeelte **ne change pas**.

`5a + 3b - 7a = (5a - 7a) + 3b = -2a + 3b`

> ⚠️ **On n'additionne JAMAIS le lettergedeelte.** `5a + 3a = 8a`, pas `8a²`.

---

## 4. ⚠️ Le signe `-` devant une parenthèse (haakjes)

C'est le piège n°1. Un `-` devant des haakjes **change TOUS les signes à l'intérieur**.

`5a - (3b + 7a - 5)`
`= 5a - 3b - 7a + 5`   ← chaque signe a été inversé
`= -2a - 3b + 5`

Truc : imagine que le `-` est un `·(-1)` qui se distribue partout.

---

## 5. Eentermen vermenigvuldigen (multiplier des monômes) — G23

On multiplie **les coëfficiënten entre eux** ET **les lettergedeelten entre eux** (on additionne les exposants des mêmes lettres).

`3a · 7a = (3·7)·(a·a) = 21a²`
`-5b² · -2b = +10b³`

> ⚠️ Règle des signes : `+·+ = +`, `-·- = +`, `+·- = -`.

---

## 6. Macht van een eenterm (puissance d'un monôme) — G24

On élève **chaque facteur** à la puissance : on met le coëfficiënt à la puissance ET on multiplie les exposants des lettres.

`(a·xᵐ)ⁿ = aⁿ · xᵐ·ⁿ`

Exemples :
`(5a²)³ = 5³·a⁶ = 125a⁶`
`(-2x³)⁴ = (-2)⁴·x¹² = +16x¹²` (exposant pair → résultat positif)
`(-2x³)³ = (-2)³·x⁹ = -8x⁹` (exposant impair → résultat négatif)

---

## 7. Veeltermen vermenigvuldigen (multiplier des polynômes) — G26

### Eenterm × veelterm
On distribue l'eenterm sur **chaque** terme (distributiviteit).
`3a·(4a + b - 5) = 12a² + 3ab - 15a`

### Veelterm × veelterm
**Chaque** terme de la première parenthèse multiplie **chaque** terme de la seconde, puis on regroupe les gelijksoortige termen.
`(2a + 3)(a - 5) = 2a² - 10a + 3a - 15 = 2a² - 7a - 15`

---

## 8. ⚠️ Volgorde van bewerkingen (ordre des opérations)

Quand il y a un produit **et** une soustraction, on fait **D'ABORD les produits**, ensuite seulement l'addition/soustraction.

`(a - 3)(a + 1) - (a + 2)·a`

Étape 1 — calculer chaque produit séparément :
- `(a - 3)(a + 1) = a² + a - 3a - 3 = a² - 2a - 3`
- `(a + 2)·a = a² + 2a`

Étape 2 — soustraire, **avec les haakjes pour le `-`** :
`= (a² - 2a - 3) - (a² + 2a)`
`= a² - 2a - 3 - a² - 2a`   ← le `-` change les signes de `a² + 2a`
`= -4a - 3`

> ⚠️ Ne jamais soustraire avant d'avoir développé les produits. Et toujours remettre des haakjes autour du 2e produit avant d'enlever le `-`.

---

## 9. Merkwaardige producten (produits remarquables) — G27 / G28

Trois formules à connaître **par cœur**. Elles évitent de tout développer.

### a) Kwadraat van een tweeterm — `(a + b)²`
$$(a + b)^2 = a^2 + 2ab + b^2$$
- kwadraat de la **1e** term : `a²`
- **dubbelproduct** (double produit) des deux termen : `2ab`
- kwadraat de la **2e** term : `b²`

Démonstration par l'**oppervlakte** (aire d'un carré de côté `a + b`) :
le grand carré se découpe en `a²` + `ab` + `ab` + `b²` = `a² + 2ab + b²`.

### b) Kwadraat van een tweeterm avec un `-` — `(a - b)²`
$$(a - b)^2 = a^2 - 2ab + b^2$$
**Seul le dubbelproduct est négatif.** Les deux kwadraten restent **positifs** (`b²` est toujours `+`).

Exemple : `(x - 3)² = x² - 6x + 9`.

### c) Product van toegevoegde tweetermen — `(a + b)(a - b)`
Deux tweetermen **toegevoegd** (conjugués) = mêmes termes, signe du milieu opposé.
$$(a + b)(a - b) = a^2 - b^2$$
kwadraat de la 1e term **moins** kwadraat de la 2e term. **Pas de dubbelproduct** (il s'annule).

Exemple : `(x + 5)(x - 5) = x² - 25`.

---

## 10. ⚠️ Ne pas confondre les trois formules

| Forme | Résultat | Combien de termes ? |
|---|---|---|
| `(a + b)²` | `a² + 2ab + b²` | 3 termes, `+` au milieu |
| `(a - b)²` | `a² - 2ab + b²` | 3 termes, `-` au milieu |
| `(a + b)(a - b)` | `a² - b²` | **2 termes seulement** |

> ⚠️ Pièges fréquents :
> - `(a + b)² ≠ a² + b²`. **Il manque toujours le `2ab`** !
> - `(a - b)²` : le `b²` reste **positif**, jamais `-b²`.
> - `(a + b)(a - b)` : il n'y a **PAS** de terme du milieu, c'est `a² - b²`.

---

## 11. ⚠️ Application à la géométrie — G21 à G26

C'est une question classique du test : exprimer une mesure comme **veelterm**.

### Rechthoek (rectangle) — lengte `l`, breedte `b`
- **omtrek** (périmètre) : `O = 2l + 2b`
- **oppervlakte** (aire) : `A = l · b`

Exemple : rechthoek de lengte `(x + 3)` et breedte `4` :
`A = 4·(x + 3) = 4x + 12`
`O = 2·(x + 3) + 2·4 = 2x + 6 + 8 = 2x + 14`

### Balk (pavé droit) — lengte `l`, breedte `b`, hoogte `h`
- **volume** : `V = l · b · h`

Exemple : `l = (x + 2)`, `b = x`, `h = 3` :
`V = (x + 2)·x·3 = 3·(x² + 2x) = 3x² + 6x`

### Vierkant (carré) — zijde `(a + b)`
- **oppervlakte** : `A = (a + b)² = a² + 2ab + b²` (voilà pourquoi le merkwaardig product est utile en géométrie).

> ⚠️ Toujours développer le produit jusqu'au bout (volgorde van bewerkingen) et regrouper les gelijksoortige termen pour donner la veelterm finale.

---

## Mémo express

1. `-` devant `(...)` → **tous** les signes changent.
2. Produits **avant** somme/différence ; remets des haakjes autour d'un produit avant un `-`.
3. `(a+b)² = a²+2ab+b²` · `(a-b)² = a²-2ab+b²` · `(a+b)(a-b) = a²-b²`.
4. Géométrie : `A_rechthoek = l·b`, `O = 2l+2b`, `V_balk = l·b·h` → développe en veelterm.
