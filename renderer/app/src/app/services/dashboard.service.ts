import { Injectable } from '@angular/core';
import { DashboardStats } from '../types/electron';

/**
 * Service Angular responsable des statistiques du dashboard.
 */
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  /**
   * Récupère les statistiques globales depuis le Main Process Electron.
   */
  async getStats(): Promise<DashboardStats> {
    return window.api.getDashboardStats();
  }
}
