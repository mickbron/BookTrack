import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthorService } from '../../services/author.service';
import { Auteur } from '../../types/electron';

/**
 * Page de gestion des auteurs.
 * Elle permet de créer, lire, modifier et supprimer des auteurs.
 */
@Component({
  selector: 'app-authors-page',
  imports: [FormsModule],
  templateUrl: './authors-page.html',
  styleUrl: './authors-page.css',
})
export class AuthorsPage implements OnInit {
  auteurs = signal<Auteur[]>([]);
  formSubmitted = signal(false);
  formMessage = signal('');

  nom = '';
  biographie = '';

  editingId: number | null = null;



  constructor(private authorService: AuthorService) {}


    /**
   * Vérifie si le nom auteur est valide.
   */
  nameError = computed(() => {
    const value = this.nom.trim();

    if (!value) {
      return 'Le nom de l’auteur est obligatoire.';
    }

    if (value.length < 2) {
      return 'Le nom doit contenir au moins 2 caractères.';
    }

    return '';
  });

  /**
   * Vérifie si la biographie est valide.
   */
  biographyError = computed(() => {
    const value = this.biographie.trim();

    if (value && value.length < 10) {
      return 'La biographie doit contenir au moins 10 caractères.';
    }

    return '';
  });

  /**
   * Vérifie si le formulaire est valide.
   */
  isAuthorFormValid = computed(() => {
    return (
      !this.nameError() &&
      !this.biographyError()
    );
  });


  /**
   * Charge les auteurs au démarrage de la page.
   */
  async ngOnInit(): Promise<void> {
    await this.loadAuthors();
  }

  /**
   * Récupère tous les auteurs depuis le service,
   * puis met à jour le signal utilisé par l'interface.
   */
  async loadAuthors(): Promise<void> {
    const auteurs = await this.authorService.getAuthors();
    this.auteurs.set(auteurs);
  }

    /**
   * Ajoute ou modifie un auteur.
   * Le nom est obligatoire, la biographie est optionnelle.
   */
  async saveAuthor(): Promise<void> {
    this.formSubmitted.set(true);
    this.formMessage.set('');

    const cleanName = this.nom.trim();
    const cleanBiography = this.biographie.trim();

    if (!cleanName) {
      this.formMessage.set('Le nom de l’auteur est obligatoire.');
      return;
    }

    if (cleanName.length < 2) {
      this.formMessage.set('Le nom doit contenir au moins 2 caractères.');
      return;
    }

    let result = null;

    if (this.editingId === null) {
      result = await this.authorService.addAuthor(cleanName, cleanBiography);
    } else {
      result = await this.authorService.updateAuthor(
        this.editingId,
        cleanName,
        cleanBiography
      );
    }

    if (!result) {
      this.formMessage.set('Impossible d’enregistrer l’auteur.');
      return;
    }

    this.formMessage.set(
      this.editingId === null
        ? 'Auteur ajouté avec succès.'
        : 'Auteur modifié avec succès.'
    );

    this.editingId = null;
    this.nom = '';
    this.biographie = '';
    this.formSubmitted.set(false);

    await this.loadAuthors();
  }

  /**
   * Remplit le formulaire avec les données de l'auteur sélectionné.
   * Cela permet ensuite de modifier ses informations.
   */
  startEditAuthor(auteur: Auteur): void {
    this.editingId = auteur.id;
    this.nom = auteur.nom;
    this.biographie = auteur.biographie ?? '';
  }

  /**
   * Annule la modification en cours et vide le formulaire.
   */
  cancelEdit(): void {
    this.resetForm();
  }

  /**
   * Vide le formulaire et repasse en mode création.
   */
  resetForm(): void {
    this.editingId = null;
    this.nom = '';
    this.biographie = '';
  }

  /**
   * Supprime un auteur puis recharge la liste.
   */
  async deleteAuthor(id: number): Promise<void> {
    await this.authorService.deleteAuthor(id);
    await this.loadAuthors();
  }
}
