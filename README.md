# Accès Universel – Carte de visite numérique

Projet React + Vite (version React de `Au.html`).

## Lancer en local
```bash
npm install
npm run dev
```

## Modifier les informations
Tout le contenu (nom, téléphone, e-mail, adresse…) est dans `src/data.js`.
La photo est dans `src/assets/photo.jpg` (remplacez-la par une autre image du même nom).

## Déployer sur Vercel
**Via GitHub (recommandé)**
1. Poussez ce dossier sur votre dépôt GitHub.
2. Sur vercel.com : *Add New → Project*, importez le dépôt.
3. Vercel détecte Vite automatiquement (Build : `npm run build`, Output : `dist`). Cliquez sur *Deploy*.

**Via la CLI**
```bash
npm i -g vercel
vercel
```
