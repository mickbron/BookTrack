import { Component, OnInit, computed, signal } from '@angular/core';

import { DashboardService } from '../../services/dashboard.service';
import { DashboardStats } from '../../types/electron';

/**
 * Page principale de l'application.
 * Elle affiche les statistiques globales de la bibliothèque.
 */
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage implements OnInit {
  stats = signal<DashboardStats>({
    totalLivres: 0,
    totalAuteurs: 0,
    totalCategories: 0,
    totalEmprunts: 0,
    totalAvis: 0,
    livresDisponibles: 0,
    livresIndisponibles: 0,
    moyenneNotes: 0,
  });

  totalElements = computed(() =>
    this.stats().totalLivres +
    this.stats().totalAuteurs +
    this.stats().totalCategories +
    this.stats().totalEmprunts +
    this.stats().totalAvis
  );

  moyenneArrondie = computed(() =>
    this.stats().moyenneNotes.toFixed(1)
  );

  tauxDisponibilite = computed(() => {
    const total = this.stats().totalLivres;

    if (total === 0) {
      return 0;
    }

    return Math.round(
      (this.stats().livresDisponibles / total) * 100
    );
  });

  constructor(private dashboardService: DashboardService) {}

  /**
   * Charge les statistiques au démarrage de la page.
   */
  async ngOnInit(): Promise<void> {
    await this.loadStats();
  }

  /**
   * Récupère les statistiques depuis Prisma via Electron
   * puis met à jour le signal local.
   */
  async loadStats(): Promise<void> {
    const stats = await this.dashboardService.getStats();
    this.stats.set(stats);
  }
}
