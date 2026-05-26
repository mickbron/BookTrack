import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Supprime toutes les données existantes.
 * L'ordre est important : on supprime d'abord les tables qui dépendent des autres.
 */
async function clearDatabase(): Promise<void> {
  await prisma.avis.deleteMany();
  await prisma.emprunt.deleteMany();
  await prisma.livreCategorie.deleteMany();
  await prisma.livre.deleteMany();
  await prisma.categorie.deleteMany();
  await prisma.auteur.deleteMany();
  await prisma.utilisateur.deleteMany();
}

/**
 * Crée les auteurs de test.
 */
async function seedAuteurs() {
  return Promise.all([
    prisma.auteur.create({
      data: {
        nom: 'Victor Hugo',
        biographie: 'Écrivain français, auteur des Misérables.',
      },
    }),
    prisma.auteur.create({
      data: {
        nom: 'George Orwell',
        biographie: 'Écrivain britannique connu pour 1984.',
      },
    }),
    prisma.auteur.create({
      data: {
        nom: 'Robert C. Martin',
        biographie: 'Auteur spécialisé dans le développement logiciel.',
      },
    }),
  ]);
}

/**
 * Crée les catégories de test.
 */
async function seedCategories() {
  return Promise.all([
    prisma.categorie.create({
      data: {
        nom: 'Roman',
      },
    }),
    prisma.categorie.create({
      data: {
        nom: 'Science-fiction',
      },
    }),
    prisma.categorie.create({
      data: {
        nom: 'Informatique',
      },
    }),
  ]);
}

/**
 * Crée les utilisateurs de test.
 */
async function seedUtilisateurs() {
  return Promise.all([
    prisma.utilisateur.create({
      data: {
        nom: 'Alice Dupont',
        email: 'alice@example.com',
      },
    }),
    prisma.utilisateur.create({
      data: {
        nom: 'Lucas Martin',
        email: 'lucas@example.com',
      },
    }),
  ]);
}

/**
 * Crée les livres et les relie à leurs auteurs.
 */
async function seedLivres(auteurs: Awaited<ReturnType<typeof seedAuteurs>>) {
  return Promise.all([
    prisma.livre.create({
      data: {
        titre: 'Les Misérables',
        description: 'Roman historique français.',
        disponible: true,
        auteurId: auteurs[0].id,
      },
    }),
    prisma.livre.create({
      data: {
        titre: '1984',
        description: 'Roman dystopique.',
        disponible: false,
        auteurId: auteurs[1].id,
      },
    }),
    prisma.livre.create({
      data: {
        titre: 'Clean Code',
        description: 'Livre sur les bonnes pratiques de programmation.',
        disponible: true,
        auteurId: auteurs[2].id,
      },
    }),
  ]);
}

/**
 * Crée les associations N:M entre livres et catégories.
 * Cette fonction remplit la table pivot LivreCategorie.
 */
async function seedLivreCategories(
  livres: Awaited<ReturnType<typeof seedLivres>>,
  categories: Awaited<ReturnType<typeof seedCategories>>
): Promise<void> {
  await prisma.livreCategorie.createMany({
    data: [
      {
        livreId: livres[0].id,
        categorieId: categories[0].id,
      },
      {
        livreId: livres[1].id,
        categorieId: categories[1].id,
      },
      {
        livreId: livres[2].id,
        categorieId: categories[2].id,
      },
    ],
  });
}

/**
 * Crée un emprunt de test.
 * Le livre 1984 est marqué comme indisponible.
 */
async function seedEmprunts(
  utilisateurs: Awaited<ReturnType<typeof seedUtilisateurs>>,
  livres: Awaited<ReturnType<typeof seedLivres>>
): Promise<void> {
  await prisma.emprunt.create({
    data: {
      utilisateurId: utilisateurs[0].id,
      livreId: livres[1].id,
      statut: 'EN_COURS',
    },
  });
}

/**
 * Crée des avis de test.
 */
async function seedAvis(
  utilisateurs: Awaited<ReturnType<typeof seedUtilisateurs>>,
  livres: Awaited<ReturnType<typeof seedLivres>>
): Promise<void> {
  await prisma.avis.createMany({
    data: [
      {
        note: 5,
        commentaire: 'Excellent livre.',
        utilisateurId: utilisateurs[0].id,
        livreId: livres[0].id,
      },
      {
        note: 4,
        commentaire: 'Très intéressant.',
        utilisateurId: utilisateurs[1].id,
        livreId: livres[2].id,
      },
    ],
  });
}

/**
 * Fonction principale du seed.
 * Elle orchestre la suppression et la création des données.
 */
async function main(): Promise<void> {
  await clearDatabase();

  const auteurs = await seedAuteurs();
  const categories = await seedCategories();
  const utilisateurs = await seedUtilisateurs();
  const livres = await seedLivres(auteurs);

  await seedLivreCategories(livres, categories);
  await seedEmprunts(utilisateurs, livres);
  await seedAvis(utilisateurs, livres);

  console.log('Seed terminé avec succès.');
}

main()
  .catch((error) => {
    console.error('Erreur pendant le seed :', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });