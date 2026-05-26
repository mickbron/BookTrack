import { Injectable } from '@angular/core';
import { Utilisateur } from '../types/electron';

/**
 * Service Angular responsable des utilisateurs.
 * Il communique avec le Main Process via l'API Electron sécurisée.
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   * Récupère tous les utilisateurs.
   */
  async getUsers(): Promise<Utilisateur[]> {
    return window.api.getUtilisateurs();
  }

  /**
   * Ajoute un nouvel utilisateur.
   */
  async addUser(nom: string, email: string): Promise<Utilisateur | null> {
    return window.api.addUtilisateur(nom, email);
  }
}
