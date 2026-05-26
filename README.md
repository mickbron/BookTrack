# BookTrack

Application desktop de gestion de bibliothèque développée avec Electron, Angular, Prisma et SQLite.

---

# Description

BookTrack est une application desktop permettant de gérer une bibliothèque locale.

L’application permet :

- la gestion des auteurs ;
- la gestion des livres ;
- la gestion des catégories ;
- la gestion des emprunts ;
- la gestion des avis ;
- l’affichage de statistiques dans un dashboard.

Le projet a été développé avec une architecture moderne utilisant :

- Electron pour l’application desktop ;
- Angular pour l’interface utilisateur ;
- Prisma comme ORM ;
- SQLite comme base de données locale.

---

# Technologies utilisées

## Frontend

- Angular
- TypeScript
- HTML
- CSS

## Backend Desktop

- Electron
- Electron Forge

## Base de données

- Prisma ORM
- SQLite

---

# Fonctionnalités principales

## Dashboard

- nombre total de livres ;
- nombre total d’auteurs ;
- statistiques générales.

## Gestion des auteurs

- ajouter un auteur ;
- modifier un auteur ;
- supprimer un auteur.

## Gestion des catégories

- ajouter une catégorie ;
- modifier une catégorie ;
- supprimer une catégorie.

## Gestion des livres

- ajouter un livre ;
- modifier un livre ;
- supprimer un livre ;
- associer plusieurs catégories ;
- associer un auteur ;
- disponibilité automatique.

## Gestion des emprunts

- créer un emprunt ;
- rendre un livre ;
- suppression d’un emprunt ;
- gestion automatique de la disponibilité du livre.

## Gestion des avis

- ajouter un avis ;
- modifier un avis ;
- supprimer un avis ;
- notation des livres.

---

# Architecture du projet

```txt
Angular Renderer
↓
Services Angular
↓
window.api
↓
preload.ts
↓
ipcRenderer.invoke()
↓
main.ts
↓
Prisma Client
↓
SQLite
```

---

# Structure du projet

```txt
booktrack/
│
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
│
├── src/
│   ├── main/
│   ├── preload/
│   └── renderer/
│
├── renderer/app/
│   ├── src/app/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   └── types/
│
├── package.json
└── README.md
```

---

# Installation du projet

## 1. Cloner le repository

```bash
git clone https://github.com/mickbron/BookTrack.git
```

## 2. Entrer dans le dossier

```bash
cd BookTrack
```

## 3. Installer les dépendances principales

```bash
npm install
```

## 4. Installer les dépendances Angular

```bash
cd renderer/app
npm install
cd ../..
```

---

# Configuration Prisma

## Générer Prisma Client

```bash
npx prisma generate
```

## Lancer les migrations

```bash
npx prisma migrate dev
```

## Ouvrir Prisma Studio

```bash
npx prisma studio
```

---

# Seeder la base de données

Le projet contient un fichier `seed.ts` permettant d’ajouter des données de démonstration.

## Lancer le seed

```bash
npm run prisma:seed
```

---

# Lancer l’application

## Mode développement

```bash
npm start
```

Cette commande :

- lance Angular ;
- compile Electron ;
- démarre l’application desktop.

---

# Build Angular

```bash
npm run build:angular
```

---

# Générer l’application Electron

## Package

```bash
npm run package
```

## Build final

```bash
npm run make
```

---

# Scripts disponibles

## Démarrer le projet

```bash
npm start
```

## Build Angular

```bash
npm run build:angular
```

## Lancer Prisma Studio

```bash
npm run prisma:studio
```

## Réinitialiser la base

```bash
npm run db:reset
```

## Lancer le seed

```bash
npm run prisma:seed
```

---

# Base de données

## Modèles principaux

- Utilisateur
- Auteur
- Livre
- Catégorie
- LivreCategorie
- Emprunt
- Avis

## Relations importantes

- Auteur 1 → N Livre
- Utilisateur 1 → N Emprunt
- Livre 1 → N Emprunt
- Utilisateur 1 → N Avis
- Livre 1 → N Avis
- Livre N ↔ N Catégorie

- Pour plus de détails dans Diagramme.jpg

---

# Sécurité Electron

L’application utilise :

- `contextIsolation`;
- `preload.ts`;
- `contextBridge`.

Angular ne communique jamais directement avec Node.js.

---

# Auteur

Projet réalisé par :

**TASSE KOAGNE MickBron**

---

# Licence

Projet académique réalisé dans le cadre d’un apprentissage Electron + Angular + Prisma.
