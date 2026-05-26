import { Injectable } from '@angular/core';
import { Auteur } from '../types/electron';

/**
 * Service Angular responsable des opérations liées aux auteurs.
 * Il appelle uniquement l'API exposée par le preload Electron.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthorService {

  /**
   * Récupère la liste complète des auteurs.
   */
  async getAuthors(): Promise<Auteur[]> {
    return window.api.getAuteurs();
  }

  /**
   * Ajoute un nouvel auteur.
   */
  async addAuthor(nom: string, biographie: string): Promise<Auteur | null> {
    return window.api.addAuteur(nom, biographie);
  }

    /**
   * Modifie un auteur existant.
   */
  async updateAuthor(
    id: number,
    nom: string,
    biographie: string
  ): Promise<Auteur | null> {
    return window.api.updateAuteur(id, nom, biographie);
  }

  /**
   * Supprime un auteur à partir de son identifiant.
   */
  async deleteAuthor(id: number): Promise<boolean> {
    return window.api.deleteAuteur(id);
  }

}
