-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dateCreation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Auteur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "biographie" TEXT
);

-- CreateTable
CREATE TABLE "Livre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "description" TEXT,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "dateCreation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "auteurId" INTEGER NOT NULL,
    CONSTRAINT "Livre_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "Auteur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "LivreCategorie" (
    "livreId" INTEGER NOT NULL,
    "categorieId" INTEGER NOT NULL,

    PRIMARY KEY ("livreId", "categorieId"),
    CONSTRAINT "LivreCategorie_livreId_fkey" FOREIGN KEY ("livreId") REFERENCES "Livre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LivreCategorie_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Emprunt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateEmprunt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateRetour" DATETIME,
    "statut" TEXT NOT NULL DEFAULT 'EN_COURS',
    "utilisateurId" INTEGER NOT NULL,
    "livreId" INTEGER NOT NULL,
    CONSTRAINT "Emprunt_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Emprunt_livreId_fkey" FOREIGN KEY ("livreId") REFERENCES "Livre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Avis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "note" INTEGER NOT NULL,
    "commentaire" TEXT,
    "dateCreation" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "utilisateurId" INTEGER NOT NULL,
    "livreId" INTEGER NOT NULL,
    CONSTRAINT "Avis_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avis_livreId_fkey" FOREIGN KEY ("livreId") REFERENCES "Livre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Categorie_nom_key" ON "Categorie"("nom");
