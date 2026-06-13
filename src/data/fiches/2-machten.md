# Fiche - Rekenregels van machten (G17-G20)

Matrix Wiskunde 2 - Getallenleer, hoofdstuk 4. Termes en néerlandais, explications en français.

## Woordenschat (vocabulaire de base)

| Nederlands | Symbool | Français |
|---|---|---|
| **macht** | a^n | la puissance |
| **grondtal** | a | la base (le nombre qu'on multiplie) |
| **exponent** | n | l'exposant (combien de fois) |
| **vierkantswortel** | √a | la racine carrée |
| **omgekeerde** | a^(-1) = 1/a | l'inverse |
| **tegengestelde** | -a | l'opposé |

> Rappel : dans `a^n`, le **grondtal** est `a` et l'**exponent** est `n`.
> Exemple : dans `3^2`, le grondtal est `3`, l'exponent est `2`. Attention : dans `-8^2` le grondtal est `8` (pas `-8`), donc `-8^2 = -64`. Mais `(-8)^2 = 64`.

---

## De basisbegrippen (G17)

### Exponent 0
**Regel :** `a^0 = 1` (voor a ≠ 0)
**Voorbeeld :** `5^0 = 1`, `(-3)^0 = 1`, `15^0 = 1`
**Explication :** n'importe quel nombre (sauf 0) élevé à la puissance 0 donne toujours 1.

### Exponent 1
**Regel :** `a^1 = a`
**Voorbeeld :** `8^1 = 8`, `125^1 = 125`
**Explication :** un nombre à la puissance 1 reste lui-même.

### Negatieve exponent (exposant négatif)
**Regel :** `a^(-n) = 1/(a^n)` (voor a ≠ 0)
**Voorbeeld :** `2^(-3) = 1/(2^3) = 1/8`, `6^(-2) = 1/(6^2) = 1/36`
**Explication :** un exposant négatif veut dire "l'**omgekeerde** (l'inverse)". On descend la puissance au dénominateur et l'exposant redevient positif. Le grondtal ne devient PAS négatif, c'est l'exposant qui change de signe.

### Omgekeerde van een breuk (inverse d'une fraction)
**Regel :** `(a/b)^(-1) = b/a`
**Voorbeeld :** `(2/3)^(-1) = 3/2`, `(2/3)^(-2) = (3/2)^2 = 9/4`
**Explication :** pour l'inverse d'une fraction, on retourne la fraction. Avec un exposant négatif `-n`, on retourne d'abord la fraction, puis on applique l'exposant positif `n`.

### Vierkantswortel (racine carrée)
**Regel :** `√a` est le nombre positif dont le carré vaut `a`. Donc `(√a)^2 = a`.
**Voorbeeld :** `√16 = 4` (car `4^2 = 16`), `√81 = 9`, `√144 = 12`
**Explication :** la racine carrée est l'opération inverse du carré. `√` ne se calcule QUE sur des nombres positifs ou nuls.

---

## De vijf rekenregels van machten

### 1. Machten met hetzelfde grondtal vermenigvuldigen (G18)
**Regel :** `a^m · a^n = a^(m+n)`
**Voorbeeld :** `5^3 · 5^2 = 5^(3+2) = 5^5`
**Explication :** quand on **multiplie** deux puissances de **même grondtal**, on garde le grondtal et on **additionne** les exposants. Le grondtal doit être identique, sinon la règle ne s'applique pas.

### 2. Machten met hetzelfde grondtal delen (G18)
**Regel :** `a^m : a^n = a^(m-n)` (voor a ≠ 0)
**Voorbeeld :** `9^8 : 9^6 = 9^(8-6) = 9^2 = 81`
**Explication :** quand on **divise** deux puissances de **même grondtal**, on garde le grondtal et on **soustrait** l'exposant du diviseur (exponent deeltal - exponent deler). Attention à ne pas confondre avec la multiplication.

### 3. Een macht tot een macht verheffen (G19)
**Regel :** `(a^m)^n = a^(m·n)`
**Voorbeeld :** `(2^3)^4 = 2^(3·4) = 2^12`, `(5^(-1))^(-2) = 5^((-1)·(-2)) = 5^2 = 25`
**Explication :** quand on élève une puissance à une puissance, on garde le grondtal et on **multiplie** les exposants. Piège fréquent : ici on multiplie, alors qu'à la règle 1 on additionne.

### 4. Een product tot een macht verheffen (G20)
**Regel :** `(a · b)^n = a^n · b^n`
**Voorbeeld :** `(2 · 5)^3 = 2^3 · 5^3`, `(3a)^2 = 3^2 · a^2 = 9a^2`
**Explication :** l'exposant d'un produit se distribue sur **chaque facteur**. Chaque facteur dans la parenthèse reçoit l'exposant.

### 5. Een quotiënt tot een macht verheffen (G20)
**Regel :** `(a/b)^n = a^n / b^n` (voor b ≠ 0)
**Voorbeeld :** `(2/5)^3 = 2^3 / 5^3 = 8/125`, `(-3/4)^2 = (-3)^2 / 4^2 = 9/16`
**Explication :** l'exposant d'un quotient (fraction) se distribue sur le numérateur ET le dénominateur.

---

## Tableau récapitulatif (à mémoriser)

| Regel (NL) | Symbool | Opération sur les exposants |
|---|---|---|
| vermenigvuldigen, zelfde grondtal | `a^m · a^n = a^(m+n)` | on **additionne** (+) |
| delen, zelfde grondtal | `a^m : a^n = a^(m-n)` | on **soustrait** (-) |
| macht tot een macht | `(a^m)^n = a^(m·n)` | on **multiplie** (×) |
| product tot een macht | `(a·b)^n = a^n · b^n` | on **distribue** |
| quotiënt tot een macht | `(a/b)^n = a^n / b^n` | on **distribue** |
| exponent 0 | `a^0 = 1` | - |
| negatieve exponent | `a^(-n) = 1/a^n` | on retourne (omgekeerde) |

**Ne pas confondre :**
- `a^m · a^n` (même grondtal, on MULTIPLIE) → on ADDITIONNE les exposants.
- `(a^m)^n` (une puissance ÉLEVÉE à une puissance) → on MULTIPLIE les exposants.

---

## ⚠️ Volgorde van bewerkingen (ton point faible !)

Quand un calcul mélange plusieurs opérations, il faut respecter l'ordre. C'est l'erreur la plus fréquente. Procède toujours dans cet ordre :

1. **Haakjes** (parenthèses) - on calcule d'abord ce qui est dans les `( )`.
2. **Machten en wortels** (puissances et racines carrées).
3. **Maal en delen** (× et :), de gauche à droite.
4. **Plus en min** (+ et -), de gauche à droite.

Moyen mnémotechnique : **H** - **M/W** - **×/:** - **+/-**.

**Voorbeeld 1 :** `1/2^2 + √16 - √81/3`
1. machten/wortels : `1/4 + 4 - 9/3`
2. delen : `9/3 = 3` → `1/4 + 4 - 3`
3. plus/min (gauche → droite) : `1/4 + 1 = 5/4`

**Voorbeeld 2 :** `2 · (3 - 7)^2`
1. haakjes : `3 - 7 = -4` → `2 · (-4)^2`
2. macht : `(-4)^2 = 16` → `2 · 16`
3. maal : `= 32`

**Voorbeeld 3 :** `2^0 - (2/3 - 1)^2 · 1/4`
1. haakjes : `2/3 - 1 = -1/3`
2. machten : `2^0 = 1` et `(-1/3)^2 = 1/9`
3. maal : `1/9 · 1/4 = 1/36`
4. min : `1 - 1/36 = 35/36`

> Astuce : un `^0` ou un `· 0` peut faire disparaître tout un bloc, mais SEULEMENT après avoir calculé les haakjes. Ne saute jamais d'étape.

*Source : Matrix Wiskunde 2, Getallenleer, p.224-267 (G17-G20).*
