import { Injectable } from '@angular/core';
import { Avis } from '../types/electron';

/**
 * Service Angular responsable des avis.
 * Il communique avec Electron via l'API sécurisée window.api.
 */
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  /**
   * Récupère tous les avis.
   */
  async getReviews(): Promise<Avis[]> {
    return window.api.getAvis();
  }

  /**
   * Ajoute un nouvel avis.
   */
  async addReview(
    note: number,
    commentaire: string,
    utilisateurId: number,
    livreId: number
  ): Promise<Avis | null> {
    return window.api.addAvis(note, commentaire, utilisateurId, livreId);
  }

  /**
   * Modifie un avis existant.
   */
  async updateReview(
    id: number,
    note: number,
    commentaire: string
  ): Promise<Avis | null> {
    return window.api.updateAvis(id, note, commentaire);
  }

  /**
   * Supprime un avis.
   */
  async deleteReview(id: number): Promise<boolean> {
    return window.api.deleteAvis(id);
  }
}
