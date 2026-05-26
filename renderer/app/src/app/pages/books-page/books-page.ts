import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
import { CategoryService } from '../../services/category.service';
import { Auteur, Categorie, Livre } from '../../types/electron';

/**
 * Page de gestion des livres.
 * Elle permet de créer, lire, modifier et supprimer des livres.
 */
@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.css',
})



export class BooksPage implements OnInit {
  livres = signal<Livre[]>([]);
  auteurs = signal<Auteur[]>([]);
  categories = signal<Categorie[]>([]);
  selectedCategoryIds = signal<number[]>([]);

  formSubmitted = signal(false);
  formMessage = signal('');

  search = signal('');
  statusFilter = signal<'ALL' | 'AVAILABLE' | 'BORROWED'>('ALL');

  titre = '';
  description = '';
  disponible = true;
  auteurId: number | null = null;

  editingId: number | null = null;

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService
  ) {}



    /**
   * Vérifie si le titre est valide.
   */
  titleError = computed(() => {
    const value = this.titre.trim();

    if (!value) {
      return 'Le titre est obligatoire.';
    }

    if (value.length < 2) {
      return 'Le titre doit contenir au moins 2 caractères.';
    }

    return '';
  });

  /**
   * Vérifie si un auteur est sélectionné.
   */
  authorError = computed(() => {
    if (this.auteurId === null) {
      return 'Veuillez sélectionner un auteur.';
    }

    return '';
  });

  /**
   * Vérifie la longueur de la description.
   */
  descriptionError = computed(() => {
    if (
      this.description.trim() &&
      this.description.trim().length < 10
    ) {
      return 'La description doit contenir au moins 10 caractères.';
    }

    return '';
  });

  /**
   * Vérifie si le formulaire complet est valide.
   */
  isBookFormValid = computed(() => {
    return (
      !this.titleError() &&
      !this.authorError() &&
      !this.descriptionError()
    );
  });


    /**
   * Liste filtrée des livres selon :
   * - la recherche texte ;
   * - le statut de disponibilité.
   */
  filteredBooks = computed(() => {
    const searchValue = this.search().toLowerCase().trim();
    const filter = this.statusFilter();

    return this.livres().filter((livre) => {

      const matchesSearch =
        livre.titre.toLowerCase().includes(searchValue);

      const matchesStatus =
        filter === 'ALL' ||
        (filter === 'AVAILABLE' && livre.disponible) ||
        (filter === 'BORROWED' && !livre.disponible);

      return matchesSearch && matchesStatus;
    });
  });


  /**
   * Charge les livres et les auteurs au démarrage de la page.
   */
  async ngOnInit(): Promise<void> {
    await this.loadAuthors();
    await this.loadCategories();
    await this.loadBooks();
  }

  /**
   * Récupère tous les livres depuis Prisma via le service Angular.
   */
  async loadBooks(): Promise<void> {
    const livres = await this.bookService.getBooks();
    this.livres.set(livres);
  }

  /**
   * Récupère tous les auteurs pour remplir la liste déroulante.
   */
  async loadAuthors(): Promise<void> {
    const auteurs = await this.authorService.getAuthors();
    this.auteurs.set(auteurs);

    if (auteurs.length > 0 && this.auteurId === null) {
      this.auteurId = auteurs[0].id;
    }
  }

  /**
   * Récupère toutes les catégories pour permettre leur sélection dans le formulaire.
   */
  async loadCategories(): Promise<void> {
    const categories = await this.categoryService.getCategories();
    this.categories.set(categories);
  }

  /**
   * Ajoute ou modifie un livre.
   * La validation se fait sans alert(), avec des messages visibles dans la page.
   */
  async saveBook(): Promise<void> {
    this.formSubmitted.set(true);
    this.formMessage.set('');

    const cleanTitle = this.titre.trim();
    const cleanDescription = this.description.trim();

    if (!cleanTitle) {
      this.formMessage.set('Le titre du livre est obligatoire.');
      return;
    }

    if (cleanTitle.length < 2) {
      this.formMessage.set('Le titre doit contenir au moins 2 caractères.');
      return;
    }

    if (this.auteurId === null) {
      this.formMessage.set('Veuillez sélectionner un auteur.');
      return;
    }

    if (cleanDescription && cleanDescription.length < 10) {
      this.formMessage.set('La description doit contenir au moins 10 caractères.');
      return;
    }

    let savedBook: Livre | null = null;

    if (this.editingId === null) {
      savedBook = await this.bookService.addBook(
        cleanTitle,
        cleanDescription,
        true,
        this.auteurId
      );
    } else {
      savedBook = await this.bookService.updateBook(
        this.editingId,
        cleanTitle,
        cleanDescription,
        this.disponible,
        this.auteurId
      );
    }

    if (!savedBook) {
      this.formMessage.set('Impossible d’enregistrer le livre.');
      return;
    }

    await this.bookService.setBookCategories(
      savedBook.id,
      this.selectedCategoryIds()
    );

    this.formMessage.set(
      this.editingId === null
        ? 'Livre ajouté avec succès.'
        : 'Livre modifié avec succès.'
    );

    this.resetForm();
    await this.loadBooks();

    this.formSubmitted.set(false);
  }

  /**
   * Remplit le formulaire avec les données du livre sélectionné,
   * y compris les catégories déjà associées.
   */
  startEditBook(livre: Livre): void {
    this.editingId = livre.id;
    this.titre = livre.titre;
    this.description = livre.description ?? '';
    this.disponible = livre.disponible;
    this.auteurId = livre.auteurId;

    const ids = livre.categories?.map((item) => item.categorieId) ?? [];
    this.selectedCategoryIds.set(ids);
  }

  /**
   * Annule la modification en cours.
   */
  cancelEdit(): void {
    this.resetForm();
  }

  /**
   * Vide le formulaire et remet le mode création.
   */
  resetForm(): void {
    this.editingId = null;
    this.titre = '';
    this.description = '';
    this.disponible = true;
    this.selectedCategoryIds.set([]);

    const firstAuthor = this.auteurs()[0];
    this.auteurId = firstAuthor ? firstAuthor.id : null;

  }

  /**
   * Supprime un livre puis recharge la liste.
   */
  async deleteBook(id: number): Promise<void> {
    const success = await this.bookService.deleteBook(id);

    if (!success) {
      alert('Impossible de supprimer ce livre.');
      return;
    }

    await this.loadBooks();
  }

    /**
   * Ajoute ou retire une catégorie de la sélection locale.
   * Cette sélection sera sauvegardée lors de l'enregistrement du livre.
   */
  toggleCategorySelection(categorieId: number): void {
    const selectedIds = this.selectedCategoryIds();

    if (selectedIds.includes(categorieId)) {
      this.selectedCategoryIds.set(
        selectedIds.filter((id) => id !== categorieId)
      );
    } else {
      this.selectedCategoryIds.set([
        ...selectedIds,
        categorieId,
      ]);
    }
  }

    /**
   * Vérifie si une catégorie est actuellement sélectionnée.
   */
  isCategorySelected(categorieId: number): boolean {
    return this.selectedCategoryIds().includes(categorieId);
  }
}
