import { Component, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoanService } from '../../services/loan.service';
import { UserService } from '../../services/user.service';
import { BookService } from '../../services/book.service';

import { Emprunt, Livre, Utilisateur } from '../../types/electron';

/**
 * Page de gestion des emprunts.
 * Elle permet d'emprunter, rendre et supprimer des emprunts.
 */
@Component({
  selector: 'app-loans-page',
  imports: [FormsModule, FormsModule, DatePipe],
  templateUrl: './loans-page.html',
  styleUrl: './loans-page.css',
})
export class LoansPage implements OnInit {
  emprunts = signal<Emprunt[]>([]);
  utilisateurs = signal<Utilisateur[]>([]);
  livres = signal<Livre[]>([]);
  userFormSubmitted = signal(false);
  userFormMessage = signal('');

  utilisateurId: number | null = null;
  livreId: number | null = null;

  nouveauNom = '';
  nouvelEmail = '';

  constructor(
    private loanService: LoanService,
    private userService: UserService,
    private bookService: BookService
  ) {}

  /**
   * Charge toutes les données nécessaires au démarrage de la page.
   */
  async ngOnInit(): Promise<void> {
    await this.loadUsers();
    await this.loadBooks();
    await this.loadLoans();
  }

  /**
   * Récupère tous les utilisateurs.
   */
  async loadUsers(): Promise<void> {
    const utilisateurs = await this.userService.getUsers();
    this.utilisateurs.set(utilisateurs);

    if (utilisateurs.length > 0 && this.utilisateurId === null) {
      this.utilisateurId = utilisateurs[0].id;
    }
  }

  /**
   * Récupère uniquement les livres disponibles pour l'emprunt.
   */
  async loadBooks(): Promise<void> {
    const livres = await this.bookService.getBooks();
    const livresDisponibles = livres.filter((livre) => livre.disponible);

    this.livres.set(livresDisponibles);

    if (livresDisponibles.length > 0 && this.livreId === null) {
      this.livreId = livresDisponibles[0].id;
    }
  }

  /**
   * Récupère tous les emprunts.
   */
  async loadLoans(): Promise<void> {
    const emprunts = await this.loanService.getLoans();
    this.emprunts.set(emprunts);
  }


  /**
   * Crée un nouvel utilisateur depuis la page des emprunts.
   * Le nom est obligatoire et l'email doit être valide.
   */
  async addUser(): Promise<void> {
    this.userFormSubmitted.set(true);
    this.userFormMessage.set('');

    const cleanName = this.nouveauNom.trim();
    const cleanEmail = this.nouvelEmail.trim();

    if (!cleanName) {
      this.userFormMessage.set('Le nom de l’utilisateur est obligatoire.');
      return;
    }

    if (cleanName.length < 2) {
      this.userFormMessage.set('Le nom doit contenir au moins 2 caractères.');
      return;
    }

    if (!cleanEmail) {
      this.userFormMessage.set('L’email est obligatoire.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      this.userFormMessage.set('Veuillez entrer un email valide.');
      return;
    }

    const result = await this.userService.addUser(cleanName, cleanEmail);

    if (!result) {
      this.userFormMessage.set('Impossible d’ajouter l’utilisateur. Email peut-être déjà utilisé.');
      return;
    }

    this.userFormMessage.set('Utilisateur ajouté avec succès.');

    this.nouveauNom = '';
    this.nouvelEmail = '';
    this.userFormSubmitted.set(false);

    await this.loadUsers();
  }

  /**
   * Crée un emprunt si un utilisateur et un livre sont sélectionnés.
   */
  async addLoan(): Promise<void> {
    if (this.utilisateurId === null || this.livreId === null) {
      return;
    }

    const emprunt = await this.loanService.addLoan(
      this.utilisateurId,
      this.livreId
    );

    if (!emprunt) {
      alert('Impossible de créer l’emprunt. Le livre est peut-être indisponible.');
      return;
    }

    this.livreId = null;

    await this.loadBooks();
    await this.loadLoans();
  }

  /**
   * Marque un emprunt comme rendu.
   */
  async returnLoan(id: number): Promise<void> {
    await this.loanService.returnLoan(id);

    await this.loadBooks();
    await this.loadLoans();
  }

  /**
   * Supprime un emprunt.
   */
  async deleteLoan(id: number): Promise<void> {
    const success = await this.loanService.deleteLoan(id);

    if (!success) {
      alert('Impossible de supprimer cet emprunt.');
      return;
    }

    await this.loadBooks();
    await this.loadLoans();
  }
}
