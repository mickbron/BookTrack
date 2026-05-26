import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';

import { PrismaClient } from '@prisma/client';

if (started) {
  app.quit();
}

const prisma = new PrismaClient();

function createWindow(): void {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,

    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  win.loadFile(
    path.join(
      __dirname,
      '..',
      '..',
      'renderer',
      'app',
      'dist',
      'app',
      'browser',
      'index.html'
    )
  );

  //win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', async () => {
  await prisma.$disconnect();0
});


/**
 * Récupère les statistiques principales du dashboard.
 * Les count() et aggregate() correspondent à des agrégats SQL.
 */
ipcMain.handle('dashboard:stats', async () => {
  try {
    const totalLivres = await prisma.livre.count();
    const totalAuteurs = await prisma.auteur.count();
    const totalCategories = await prisma.categorie.count();
    const totalEmprunts = await prisma.emprunt.count();
    const totalAvis = await prisma.avis.count();

    const livresDisponibles = await prisma.livre.count({
      where: {
        disponible: true,
      },
    });

    const livresIndisponibles = await prisma.livre.count({
      where: {
        disponible: false,
      },
    });

    const moyenne = await prisma.avis.aggregate({
      _avg: {
        note: true,
      },
    });

    return {
      totalLivres,
      totalAuteurs,
      totalCategories,
      totalEmprunts,
      totalAvis,
      livresDisponibles,
      livresIndisponibles,
      moyenneNotes: moyenne._avg.note ?? 0,
    };
  } catch (error) {
    console.error('Erreur lors du chargement des statistiques :', error);

    return {
      totalLivres: 0,
      totalAuteurs: 0,
      totalCategories: 0,
      totalEmprunts: 0,
      totalAvis: 0,
      livresDisponibles: 0,
      livresIndisponibles: 0,
      moyenneNotes: 0,
    };
  }
});


/**
 * Récupère tous les livres avec leur auteur et leurs catégories.
 * Le include permet de faire des JOIN Prisma vers Auteur et Categorie.
 */
ipcMain.handle('livres:get', async () => {
  try {
    return await prisma.livre.findMany({
      include: {
        auteur: true,
        categories: {
          include: {
            categorie: true,
          },
        },
      },
      orderBy: {
        titre: 'asc',
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des livres :', error);
    return [];
  }
});

/**
 * Crée un nouveau livre.
 * Le livre est relié à un auteur grâce à la clé étrangère auteurId.
 */
ipcMain.handle(
  'livres:add',
  async (
    _event,
    titre: string,
    description: string,
    disponible: boolean,
    auteurId: number
  ) => {
    try {
      return await prisma.livre.create({
        data: {
          titre: titre.trim(),
          description: description.trim() || null,
          disponible,
          auteurId,
        },
      });
    } catch (error) {
      console.error('Erreur lors de la création du livre :', error);
      return null;
    }
  }
);

/**
 * Modifie un livre existant.
 * On utilise l'id du livre pour retrouver la ligne à modifier.
 */
ipcMain.handle(
  'livres:update',
  async (
    _event,
    id: number,
    titre: string,
    description: string,
    disponible: boolean,
    auteurId: number
  ) => {
    try {
      return await prisma.livre.update({
        where: {
          id,
        },
        data: {
          titre: titre.trim(),
          description: description.trim() || null,
          disponible,
          auteurId,
        },
      });
    } catch (error) {
      console.error('Erreur lors de la modification du livre :', error);
      return null;
    }
  }
);

/**
 * Supprime un livre.
 * Avant de supprimer le livre, on supprime ses relations dans la table pivot LivreCategorie.
 */
ipcMain.handle('livres:delete', async (_event, id: number) => {
  try {
    await prisma.livreCategorie.deleteMany({
      where: {
        livreId: id,
      },
    });

    await prisma.livre.delete({
      where: {
        id,
      },
    });

    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression du livre :', error);
    return false;
  }
});

/**
 * Récupère tous les auteurs depuis la base de données.
 * Les auteurs sont triés par nom pour faciliter la lecture dans l'interface.
 */
ipcMain.handle('auteurs:get', async () => {
  try {
    return await prisma.auteur.findMany({
      orderBy: {
        nom: 'asc',
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des auteurs :', error);
    return [];
  }
});

/**
 * Crée un nouvel auteur dans la base de données.
 * La biographie est optionnelle : si elle est vide, on enregistre null.
 */
ipcMain.handle('auteurs:add', async (_event, nom: string, biographie: string) => {
  try {
    return await prisma.auteur.create({
      data: {
        nom: nom.trim(),
        biographie: biographie.trim() || null,
      },
    });
  } catch (error) {
    console.error('Erreur lors de la création de l’auteur :', error);
    return null;
  }
});

/**
 * Supprime un auteur à partir de son identifiant.
 * Attention : si l'auteur possède encore des livres liés, Prisma peut refuser la suppression.
 */
ipcMain.handle('auteurs:delete', async (_event, id: number) => {
  try {
    await prisma.auteur.delete({
      where: { id },
    });

    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression de l’auteur :', error);
    return false;
  }
});

/**
 * Modifie un auteur existant dans la base de données.
 * On utilise l'identifiant de l'auteur pour trouver la bonne ligne,
 * puis on met à jour son nom et sa biographie.
 */
ipcMain.handle(
  'auteurs:update',
  async (_event, id: number, nom: string, biographie: string) => {
    try {
      return await prisma.auteur.update({
        where: {
          id,
        },
        data: {
          nom: nom.trim(),
          biographie: biographie.trim() || null,
        },
      });
    } catch (error) {
      console.error('Erreur lors de la modification de l’auteur :', error);
      return null;
    }
  }
);


/**
 * Récupère toutes les catégories.
 * Les catégories sont triées par nom pour une lecture plus simple dans l'interface.
 */
ipcMain.handle('categories:get', async () => {
  try {
    return await prisma.categorie.findMany({
      orderBy: {
        nom: 'asc',
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories :', error);
    return [];
  }
});

/**
 * Crée une nouvelle catégorie.
 * Le nom est obligatoire et unique dans la base de données.
 */
ipcMain.handle('categories:add', async (_event, nom: string) => {
  try {
    return await prisma.categorie.create({
      data: {
        nom: nom.trim(),
      },
    });
  } catch (error) {
    console.error('Erreur lors de la création de la catégorie :', error);
    return null;
  }
});

/**
 * Modifie une catégorie existante.
 * La catégorie est retrouvée grâce à son identifiant.
 */
ipcMain.handle('categories:update', async (_event, id: number, nom: string) => {
  try {
    return await prisma.categorie.update({
      where: {
        id,
      },
      data: {
        nom: nom.trim(),
      },
    });
  } catch (error) {
    console.error('Erreur lors de la modification de la catégorie :', error);
    return null;
  }
});


/**
 * Supprime une catégorie.
 * Avant de supprimer la catégorie, on supprime ses relations avec les livres.
 */
ipcMain.handle('categories:delete', async (_event, id: number) => {
  try {
    await prisma.livreCategorie.deleteMany({
      where: {
        categorieId: id,
      },
    });

    await prisma.categorie.delete({
      where: {
        id,
      },
    });

    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression de la catégorie :', error);
    return false;
  }
});


/**
 * Remplace les catégories associées à un livre.
 * On supprime d'abord les anciennes associations dans la table pivot,
 * puis on recrée les nouvelles associations sélectionnées.
 */
ipcMain.handle(
  'livres:set-categories',
  async (_event, livreId: number, categorieIds: number[]) => {
    try {
      await prisma.livreCategorie.deleteMany({
        where: {
          livreId,
        },
      });

      await prisma.livreCategorie.createMany({
        data: categorieIds.map((categorieId) => ({
          livreId,
          categorieId,
        })),
      });

      return true;
    } catch (error) {
      console.error('Erreur lors de l’association des catégories au livre :', error);
      return false;
    }
  }
);

/**
 * Récupère tous les utilisateurs.
 * Ils sont triés par nom pour faciliter leur sélection dans l'interface.
 */
ipcMain.handle('utilisateurs:get', async () => {
  try {
    return await prisma.utilisateur.findMany({
      orderBy: {
        nom: 'asc',
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    return [];
  }
});

/**
 * Crée un nouvel utilisateur.
 * L'email doit être unique dans la base de données.
 */
ipcMain.handle(
  'utilisateurs:add',
  async (_event, nom: string, email: string) => {
    try {
      return await prisma.utilisateur.create({
        data: {
          nom: nom.trim(),
          email: email.trim(),
        },
      });
    } catch (error) {
      console.error('Erreur lors de la création de l’utilisateur :', error);
      return null;
    }
  }
);

/**
 * Récupère tous les emprunts avec le livre et l'utilisateur liés.
 * Les include correspondent à des JOIN en SQL.
 */
ipcMain.handle('emprunts:get', async () => {
  try {
    return await prisma.emprunt.findMany({
      include: {
        utilisateur: true,
        livre: true,
      },
      orderBy: {
        dateEmprunt: 'desc',
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des emprunts :', error);
    return [];
  }
});

/**
 * Crée un emprunt pour un utilisateur et un livre.
 * Le livre devient automatiquement indisponible.
 */
ipcMain.handle(
  'emprunts:add',
  async (_event, utilisateurId: number, livreId: number) => {
    try {
      const livre = await prisma.livre.findUnique({
        where: {
          id: livreId,
        },
      });

      if (!livre || !livre.disponible) {
        return null;
      }

      const emprunt = await prisma.emprunt.create({
        data: {
          utilisateurId,
          livreId,
          statut: 'EN_COURS',
        },
      });

      await prisma.livre.update({
        where: {
          id: livreId,
        },
        data: {
          disponible: false,
        },
      });

      return emprunt;
    } catch (error) {
      console.error('Erreur lors de la création de l’emprunt :', error);
      return null;
    }
  }
);

/**
 * Marque un emprunt comme rendu.
 * La date de retour est remplie et le livre redevient disponible.
 */
ipcMain.handle('emprunts:return', async (_event, id: number) => {
  try {
    const emprunt = await prisma.emprunt.findUnique({
      where: {
        id,
      },
    });

    if (!emprunt) {
      return null;
    }

    const empruntRendu = await prisma.emprunt.update({
      where: {
        id,
      },
      data: {
        statut: 'RENDU',
        dateRetour: new Date(),
      },
    });

    await prisma.livre.update({
      where: {
        id: emprunt.livreId,
      },
      data: {
        disponible: true,
      },
    });

    return empruntRendu;
  } catch (error) {
    console.error('Erreur lors du retour de l’emprunt :', error);
    return null;
  }
});

/**
 * Supprime un emprunt.
 * Si l'emprunt était encore en cours, le livre est remis disponible.
 */
ipcMain.handle('emprunts:delete', async (_event, id: number) => {
  try {
    const emprunt = await prisma.emprunt.findUnique({
      where: {
        id,
      },
    });

    if (!emprunt) {
      return false;
    }

    if (emprunt.statut === 'EN_COURS') {
      await prisma.livre.update({
        where: {
          id: emprunt.livreId,
        },
        data: {
          disponible: true,
        },
      });
    }

    await prisma.emprunt.delete({
      where: {
        id,
      },
    });

    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression de l’emprunt :', error);
    return false;
  }
});


/**
 * Récupère tous les avis avec le livre et l'utilisateur liés.
 * Les include permettent d'afficher directement le nom du livre et de l'utilisateur.
 */
ipcMain.handle('avis:get', async () => {
  try {
    return await prisma.avis.findMany({
      include: {
        utilisateur: true,
        livre: true,
      },
      orderBy: {
        dateCreation: 'desc',
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des avis :', error);
    return [];
  }
});

/**
 * Crée un avis pour un livre donné par un utilisateur.
 * La note doit être comprise entre 1 et 5.
 */
ipcMain.handle(
  'avis:add',
  async (
    _event,
    note: number,
    commentaire: string,
    utilisateurId: number,
    livreId: number
  ) => {
    try {
      if (note < 1 || note > 5) {
        return null;
      }

      return await prisma.avis.create({
        data: {
          note,
          commentaire: commentaire.trim() || null,
          utilisateurId,
          livreId,
        },
      });
    } catch (error) {
      console.error('Erreur lors de la création de l’avis :', error);
      return null;
    }
  }
);

/**
 * Modifie un avis existant.
 * Seules la note et le commentaire sont modifiés.
 */
ipcMain.handle(
  'avis:update',
  async (_event, id: number, note: number, commentaire: string) => {
    try {
      if (note < 1 || note > 5) {
        return null;
      }

      return await prisma.avis.update({
        where: {
          id,
        },
        data: {
          note,
          commentaire: commentaire.trim() || null,
        },
      });
    } catch (error) {
      console.error('Erreur lors de la modification de l’avis :', error);
      return null;
    }
  }
);

/**
 * Supprime un avis à partir de son identifiant.
 */
ipcMain.handle('avis:delete', async (_event, id: number) => {
  try {
    await prisma.avis.delete({
      where: {
        id,
      },
    });

    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression de l’avis :', error);
    return false;
  }
});