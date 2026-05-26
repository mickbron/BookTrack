import { Injectable } from '@angular/core';
import { Emprunt } from '../types/electron';

/**
 * Service Angular responsable des emprunts.
 * Il sert d'intermédiaire entre les composants Angular et l'API Electron.
 */
@Injectable({
  providedIn: 'root',
})
export class LoanService {
  /**
   * Récupère tous les emprunts avec leurs livres et utilisateurs.
   */
  async getLoans(): Promise<Emprunt[]> {
    return window.api.getEmprunts();
  }

  /**
   * Crée un nouvel emprunt pour un utilisateur et un livre.
   */
  async addLoan(
    utilisateurId: number,
    livreId: number
  ): Promise<Emprunt | null> {
    return window.api.addEmprunt(utilisateurId, livreId);
  }

  /**
   * Marque un emprunt comme rendu.
   */
  async returnLoan(id: number): Promise<Emprunt | null> {
    return window.api.returnEmprunt(id);
  }

  /**
   * Supprime un emprunt.
   */
  async deleteLoan(id: number): Promise<boolean> {
    return window.api.deleteEmprunt(id);
  }
}
