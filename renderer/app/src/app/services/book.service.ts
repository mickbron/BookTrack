import { Injectable } from '@angular/core';
import { Livre } from '../types/electron';

/**
 * Service Angular responsable des opérations liées aux livres.
 * Il communique avec le Main Process via l'API exposée par le preload.
 */
@Injectable({
  providedIn: 'root',
})
export class BookService {
  /**
   * Récupère tous les livres avec leurs auteurs.
   */
  async getBooks(): Promise<Livre[]> {
    return window.api.getLivres();
  }

  /**
   * Ajoute un nouveau livre.
   */
  async addBook(
    titre: string,
    description: string,
    disponible: boolean,
    auteurId: number
  ): Promise<Livre | null> {
    return window.api.addLivre(titre, description, disponible, auteurId);
  }

  /**
   * Modifie un livre existant.
   */
  async updateBook(
    id: number,
    titre: string,
    description: string,
    disponible: boolean,
    auteurId: number
  ): Promise<Livre | null> {
    return window.api.updateLivre(id, titre, description, disponible, auteurId);
  }

  /**
   * Supprime un livre à partir de son identifiant.
   */
  async deleteBook(id: number): Promise<boolean> {
    return window.api.deleteLivre(id);
  }

    /**
   * Associe une liste de catégories à un livre.
   */
  async setBookCategories(livreId: number, categorieIds: number[]): Promise<boolean> {
    return window.api.setLivreCategories(livreId, categorieIds);
  }
}
