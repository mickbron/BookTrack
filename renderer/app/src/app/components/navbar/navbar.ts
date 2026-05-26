import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Barre de navigation principale de l'application.
 * Permet d'accéder rapidement aux différentes pages.
 */
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
