import { Routes } from '@angular/router';

import { DashboardPage } from './pages/dashboard-page/dashboard-page';
import { BooksPage } from './pages/books-page/books-page';
import { AuthorsPage } from './pages/authors-page/authors-page';
import { CategoriesPage } from './pages/categories-page/categories-page';
import { LoansPage } from './pages/loans-page/loans-page';
import { ReviewsPage } from './pages/reviews-page/reviews-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPage,
  },
  {
    path: 'books',
    component: BooksPage,
  },
  {
    path: 'authors',
    component: AuthorsPage,
  },
  {
    path: 'categories',
    component: CategoriesPage,
  },
  {
    path: 'loans',
    component: LoansPage,
  },
  {
    path: 'reviews',
    component: ReviewsPage,
  },
];
