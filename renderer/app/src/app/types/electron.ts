export interface DashboardStats {
  totalLivres: number;
  totalAuteurs: number;
  totalCategories: number;
  totalEmprunts: number;
  totalAvis: number;
  livresDisponibles: number;
  livresIndisponibles: number;
  moyenneNotes: number;
}

export interface Auteur {
  id: number;
  nom: string;
  biographie?: string | null;
}

export interface Livre {
  id: number;
  titre: string;
  description?: string | null;
  disponible: boolean;
  auteurId: number;
  auteur?: Auteur;
  categories?: LivreCategorie[];
}

export interface Categorie {
  id: number;
  nom: string;
}

export interface LivreCategorie {
  livreId: number;
  categorieId: number;
  categorie: Categorie;
}


export type StatutEmprunt = 'EN_COURS' | 'RENDU';

export interface Utilisateur {
  id: number;
  nom: string;
  email: string;
  dateCreation: string;
}

export interface Emprunt {
  id: number;
  dateEmprunt: string;
  dateRetour?: string | null;
  statut: StatutEmprunt;
  utilisateurId: number;
  livreId: number;
  utilisateur?: Utilisateur;
  livre?: Livre;
}

export interface Avis {
  id: number;
  note: number;
  commentaire?: string | null;
  dateCreation: string;
  utilisateurId: number;
  livreId: number;
  utilisateur?: Utilisateur;
  livre?: Livre;
}

export interface AppAPI {

  getDashboardStats: () => Promise<DashboardStats>;

  getLivres: () => Promise<Livre[]>;
  addLivre: (titre: string, description: string, disponible: boolean, auteurId: number) => Promise<Livre | null>;
  updateLivre: (id: number, titre: string, description: string, disponible: boolean, auteurId: number) => Promise<Livre | null>;
  deleteLivre: (id: number) => Promise<boolean>;

  getAuteurs: () => Promise<Auteur[]>;
  addAuteur: (nom: string, biographie: string) => Promise<Auteur>;
  updateAuteur: (id: number, nom: string, biographie: string) => Promise<Auteur | null>;
  deleteAuteur: (id: number) => Promise<boolean>;

  getCategories: () => Promise<Categorie[]>;
  addCategorie: (nom: string) => Promise<Categorie | null>;
  updateCategorie: (id: number, nom: string) => Promise<Categorie | null>;
  deleteCategorie: (id: number) => Promise<boolean>;
  setLivreCategories: (livreId: number, categorieIds: number[]) => Promise<boolean>;


  getUtilisateurs: () => Promise<Utilisateur[]>;
  addUtilisateur: (nom: string, email: string) => Promise<Utilisateur | null>;

  getEmprunts: () => Promise<Emprunt[]>;
  addEmprunt: (utilisateurId: number, livreId: number) => Promise<Emprunt | null>;
  returnEmprunt: (id: number) => Promise<Emprunt | null>;
  deleteEmprunt: (id: number) => Promise<boolean>;

  getAvis: () => Promise<Avis[]>;
  addAvis: (note: number, commentaire: string, utilisateurId: number, livreId: number) => Promise<Avis | null>;
  updateAvis: (id: number, note: number, commentaire: string) => Promise<Avis | null>;
  deleteAvis: (id: number) => Promise<boolean>;


}
