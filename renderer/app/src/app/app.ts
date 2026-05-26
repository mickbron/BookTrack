import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

/**
 * Composant racine de l'application.
 * Il affiche la barre de navigation et les pages Angular.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar />
    <router-outlet />
  `,
})
export class App {}
