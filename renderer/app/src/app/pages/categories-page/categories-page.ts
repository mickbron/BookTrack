import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CategoryService } from '../../services/category.service';
import { Categorie } from '../../types/electron';

/**
 * Page de gestion des catégories.
 * Elle permet de créer, lire, modifier et supprimer des catégories.
 */
@Component({
  selector: 'app-categories-page',
  imports: [FormsModule],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css',
})
export class CategoriesPage implements OnInit {
  categories = signal<Categorie[]>([]);

  nom = '';
  editingId: number | null = null;

  constructor(private categoryService: CategoryService) {}

  /**
   * Charge les catégories au démarrage de la page.
   */
  async ngOnInit(): Promise<void> {
    await this.loadCategories();
  }

  /**
   * Récupère toutes les catégories et met à jour le signal.
   */
  async loadCategories(): Promise<void> {
    const categories = await this.categoryService.getCategories();
    this.categories.set(categories);
  }

  /**
   * Ajoute ou modifie une catégorie selon la valeur de editingId.
   */
  async saveCategory(): Promise<void> {
    const cleanName = this.nom.trim();

    if (!cleanName) {
      alert('Le nom de la catégorie est obligatoire.');
      return;
    }

    if (this.editingId === null) {
      await this.categoryService.addCategory(cleanName);
    } else {
      await this.categoryService.updateCategory(this.editingId, cleanName);
    }

    this.resetForm();
    await this.loadCategories();
  }

  /**
   * Remplit le formulaire avec la catégorie sélectionnée pour modification.
   */
  startEditCategory(categorie: Categorie): void {
    this.editingId = categorie.id;
    this.nom = categorie.nom;
  }

  /**
   * Annule la modification en cours.
   */
  cancelEdit(): void {
    this.resetForm();
  }

  /**
   * Vide le formulaire et remet la page en mode création.
   */
  resetForm(): void {
    this.editingId = null;
    this.nom = '';
  }

  /**
   * Supprime une catégorie puis recharge la liste.
   */
  async deleteCategory(id: number): Promise<void> {
    const success = await this.categoryService.deleteCategory(id);

    if (!success) {
      alert('Impossible de supprimer cette catégorie.');
      return;
    }

    await this.loadCategories();
  }

}
