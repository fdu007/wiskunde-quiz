# Wiskunde Examen Trainer 📐

Application de révision et d'entraînement pour l'examen de **Wiskunde 2** (juin 2026) : **Getallenleer** & **Meetkunde** (manuel Matrix Wiskunde 2).

Faite pour Corentin : termes mathématiques en **néerlandais** (comme à l'examen), explications en **français**. Chaque réponse est expliquée pour comprendre, pas seulement pour cocher.

## Contenu

- **129 questions** couvrant toute la matière d'examen (chapitres G11-G28 et M12-M27).
- **7 fiches de révision** thématiques (l'essentiel à connaître), avec un focus sur les points à renforcer.
- Modes : **Défi examen** (priorité aux points faibles), **Quiz mixte**, **entraînement par thème**.
- Gamification : XP, niveaux, séries (streak), badges, progression sauvegardée localement.

## Thèmes

| Thème | Chapitres |
|---|---|
| Evenredigheden & schijfdiagrammen | G11 - G16 |
| Rekenregels van machten | G17 - G20 |
| Eentermen & veeltermen | G21 - G28 |
| Hoeken | M12 - M16 |
| Congruentie | M17 - M19 |
| Driehoeken (médiatrice, bissectrice) | M20 - M24 |
| Vierhoeken | M25 - M27 |

## Lancer en local

```bash
npm install
npm run dev
```

## Déploiement

Le push sur `main` déclenche le workflow GitHub Actions qui build et publie sur **GitHub Pages**.
Active Pages dans `Settings → Pages → Source : GitHub Actions`.

## Stack

React + Vite, KaTeX (formules), marked (fiches Markdown). Aucune donnée envoyée : tout reste dans le navigateur.
