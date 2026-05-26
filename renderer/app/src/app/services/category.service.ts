import { Injectable } from '@angular/core';
import { Categorie } from '../types/electron';

/**
 * Service Angular responsable des opérations liées aux catégories.
 * Il utilise uniquement l'API sécurisée exposée par le preload Electron.
 */
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  /**
   * Récupère toutes les catégories depuis la base de données.
   */
  async getCategories(): Promise<Categorie[]> {
    return window.api.getCategories();
  }

  /**
   * Ajoute une nouvelle catégorie.
   */
  async addCategory(nom: string): Promise<Categorie | null> {
    return window.api.addCategorie(nom);
  }

  /**
   * Modifie une catégorie existante.
   */
  async updateCategory(id: number, nom: string): Promise<Categorie | null> {
    return window.api.updateCategorie(id, nom);
  }

  /**
   * Supprime une catégorie à partir de son identifiant.
   */
  async deleteCategory(id: number): Promise<boolean> {
    return window.api.deleteCategorie(id);
  }
}
