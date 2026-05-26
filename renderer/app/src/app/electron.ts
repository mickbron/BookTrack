export interface DashboardStats {
  totalLivres: number;
  totalAuteurs: number;
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
  dateCreation: string;
  auteurId: number;
  auteur?: Auteur;
}

export interface AppAPI {

  getDashboardStats: () => Promise<DashboardStats>;

  getLivres: () => Promise<Livre[]>;

  addLivre: (
    titre: string,
    description: string,
    disponible: boolean,
    auteurId: number
  ) => Promise<Livre | null>;

  updateLivre: (
    id: number,
    titre: string,
    description: string,
    disponible: boolean,
    auteurId: number
  ) => Promise<Livre | null>;

  deleteLivre: (id: number) => Promise<boolean>;

  getAuteurs: () => Promise<Auteur[]>;
  addAuteur: (nom: string, biographie: string) => Promise<Auteur | null>;
  updateAuteur: (id: number, nom: string, biographie: string) => Promise<Auteur | null>;
  deleteAuteur: (id: number) => Promise<boolean>;

}
