import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { ReviewService } from '../../services/review.service';
import { UserService } from '../../services/user.service';
import { BookService } from '../../services/book.service';

import { Avis, Livre, Utilisateur } from '../../types/electron';

/**
 * Page de gestion des avis.
 * Elle permet de créer, lire, modifier et supprimer des avis.
 */
@Component({
  selector: 'app-reviews-page',
  imports: [FormsModule, DatePipe],
  templateUrl: './reviews-page.html',
  styleUrl: './reviews-page.css',
})
export class ReviewsPage implements OnInit {
  avis = signal<Avis[]>([]);
  utilisateurs = signal<Utilisateur[]>([]);
  livres = signal<Livre[]>([]);
  reviewFormSubmitted = signal(false);
  reviewFormMessage = signal('');




  note = 5;
  commentaire = '';
  utilisateurId: number | null = null;
  livreId: number | null = null;

  editingId: number | null = null;


      /**
   * Vérifie si la note est valide.
   */
  noteError = computed(() => {

    if (this.note < 1 || this.note > 5) {
      return 'La note doit être comprise entre 1 et 5.';
    }

    return '';
  });

  constructor(
    private reviewService: ReviewService,
    private userService: UserService,
    private bookService: BookService
  ) {}


  /**
   * Charge les avis, utilisateurs et livres au démarrage de la page.
   */
  async ngOnInit(): Promise<void> {
    await this.loadUsers();
    await this.loadBooks();
    await this.loadReviews();
  }

  /**
   * Récupère tous les utilisateurs pour le formulaire.
   */
  async loadUsers(): Promise<void> {
    const utilisateurs = await this.userService.getUsers();
    this.utilisateurs.set(utilisateurs);

    if (utilisateurs.length > 0 && this.utilisateurId === null) {
      this.utilisateurId = utilisateurs[0].id;
    }
  }

  /**
   * Récupère tous les livres pour le formulaire.
   */
  async loadBooks(): Promise<void> {
    const livres = await this.bookService.getBooks();
    this.livres.set(livres);

    if (livres.length > 0 && this.livreId === null) {
      this.livreId = livres[0].id;
    }
  }

  /**
   * Récupère tous les avis enregistrés.
   */
  async loadReviews(): Promise<void> {
    const avis = await this.reviewService.getReviews();
    this.avis.set(avis);
  }

    /**
   * Ajoute ou modifie un avis.
   * La note doit obligatoirement être comprise entre 1 et 5.
   */
  async saveReview(): Promise<void> {
    this.reviewFormSubmitted.set(true);
    this.reviewFormMessage.set('');

    if (this.utilisateurId === null) {
      this.reviewFormMessage.set('Veuillez sélectionner un utilisateur.');
      return;
    }

    if (this.livreId === null) {
      this.reviewFormMessage.set('Veuillez sélectionner un livre.');
      return;
    }

    if (this.note < 1 || this.note > 5) {
      this.reviewFormMessage.set('La note doit être comprise entre 1 et 5.');
      return;
    }

    let result = null;

    if (this.editingId === null) {
      result = await this.reviewService.addReview(
        this.note,
        this.commentaire,
        this.utilisateurId,
        this.livreId
      );
    } else {
      result = await this.reviewService.updateReview(
        this.editingId,
        this.note,
        this.commentaire
      );
    }

    if (!result) {
      this.reviewFormMessage.set('Impossible d’enregistrer l’avis.');
      return;
    }

    this.reviewFormMessage.set(
      this.editingId === null
        ? 'Avis ajouté avec succès.'
        : 'Avis modifié avec succès.'
    );

    this.resetForm();
    this.reviewFormSubmitted.set(false);

    await this.loadReviews();
  }

  /**
   * Remplit le formulaire avec l'avis sélectionné.
   */
  startEditReview(avis: Avis): void {
    this.editingId = avis.id;
    this.note = avis.note;
    this.commentaire = avis.commentaire ?? '';
    this.utilisateurId = avis.utilisateurId;
    this.livreId = avis.livreId;
  }

  /**
   * Annule la modification en cours.
   */
  cancelEdit(): void {
    this.resetForm();
  }

  /**
   * Réinitialise le formulaire.
   */
  resetForm(): void {
    this.editingId = null;
    this.note = 5;
    this.commentaire = '';

    const firstUser = this.utilisateurs()[0];
    const firstBook = this.livres()[0];

    this.utilisateurId = firstUser ? firstUser.id : null;
    this.livreId = firstBook ? firstBook.id : null;
  }

  /**
   * Supprime un avis puis recharge la liste.
   */
  async deleteReview(id: number): Promise<void> {
    const success = await this.reviewService.deleteReview(id);

    if (!success) {
      alert('Impossible de supprimer cet avis.');
      return;
    }

    await this.loadReviews();
  }
}
