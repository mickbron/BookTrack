# 📚 BookTrack

BookTrack est une application desktop de gestion de bibliothèque développée avec :

- Electron
- Angular
- Prisma ORM
- SQLite

L'application permet de gérer :
- les livres ;
- les auteurs ;
- les catégories ;
- les emprunts ;
- les avis utilisateurs.

---

# 🚀 Technologies utilisées

## Frontend
- Angular 21
- TypeScript
- Angular Signals
- Angular Router
- HTML / CSS

## Backend Desktop
- Electron
- Electron Forge
- IPC Electron

## Base de données
- Prisma ORM
- SQLite

---

# 📁 Architecture du projet

```txt
booktrack/
│
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
│
├── renderer/app/
│   └── src/app/
│       ├── pages/
│       ├── services/
│       ├── components/
│       └── types/
│
├── src/
│   ├── main/
│   └── preload/
│
├── package.json
└── README.md
```

---

# ⚙️ Installation du projet

## 1. Cloner le repository

```bash
git clone <url-du-repository>
```

## 2. Entrer dans le dossier

```bash
cd booktrack
```

## 3. Installer les dépendances

```bash
npm install
```

---

# 🗄️ Base de données Prisma

## Générer Prisma Client

```bash
npm run prisma:generate
```

## Créer les migrations

```bash
npm run prisma:migrate
```

## Remplir la base avec des données de test

```bash
npm run prisma:seed
```

## Ouvrir Prisma Studio

```bash
npm run prisma:studio
```

---

# ▶️ Lancer l'application

## Build Angular

```bash
npm run build:angular
```

## Démarrer Electron

```bash
npm start
```

---

# ✅ Fonctionnalités

## 📚 Gestion des livres
- Ajouter un livre
- Modifier un livre
- Supprimer un livre
- Associer un auteur
- Associer des catégories

## ✍️ Gestion des auteurs
- Ajouter un auteur
- Modifier un auteur
- Supprimer un auteur

## 🏷️ Gestion des catégories
- Ajouter une catégorie
- Supprimer une catégorie
- Relation Many-To-Many avec les livres

## 📦 Gestion des emprunts
- Emprunter un livre
- Retourner un livre
- Statut des emprunts

## ⭐ Gestion des avis
- Ajouter un avis
- Donner une note
- Ajouter un commentaire

## 📊 Dashboard
- Nombre de livres
- Nombre d’auteurs
- Nombre de catégories
- Nombre d’emprunts
- Nombre d’avis
- Moyenne des notes

---

# 🔗 Relations Prisma utilisées

## One-To-Many
- Un auteur possède plusieurs livres
- Un utilisateur possède plusieurs emprunts
- Un livre possède plusieurs avis

## Many-To-Many
- Un livre possède plusieurs catégories
- Une catégorie possède plusieurs livres

---

# 🧠 Concepts Angular utilisés

- Standalone Components
- Angular Signals
- Computed Signals
- Services Angular
- Routing Angular
- FormsModule
- @for
- @if

---

# 🧠 Concepts Prisma utilisés

- Prisma Client
- Relations SQL
- Migrations
- Aggregate
- Count
- Seed
- SQLite

---


# 👨‍💻 Auteur

Projet réalisé par :

**Mickbron Tasse koagne**

Projet académique réalisé dans le cadre d’un examen Electron + Angular + Prisma.

---

# 📌 Remarques

Ce projet utilise Electron pour transformer une application Angular en application desktop multiplateforme.

Les communications entre Angular et Electron se font via :
- IPC Main
- IPC Renderer
- Preload Script

La base de données SQLite est gérée par Prisma ORM.