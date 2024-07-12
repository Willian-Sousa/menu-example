import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'bebidas',
    loadComponent: () => import('./pages/bebidas/bebidas.page').then( m => m.BebidasPage)
  },
  {
    path: 'detalhes',
    loadComponent: () => import('./pages/detalhes/detalhes.page').then( m => m.DetalhesPage)
  },
  {
    path: 'detalhes-prato-do-dia',
    loadComponent: () => import('./pages/detalhes-prato-do-dia/detalhes-prato-do-dia.page').then( m => m.DetalhesPratoDoDiaPage)
  },
  {
    path: 'lanches',
    loadComponent: () => import('./pages/lanches/lanches.page').then( m => m.LanchesPage)
  },
  {
    path: 'pratos-en',
    loadComponent: () => import('./pages/pratos-en/pratos-en.page').then( m => m.PratosEnPage)
  },
  {
    path: 'pratos-pr',
    loadComponent: () => import('./pages/pratos-pr/pratos-pr.page').then( m => m.PratosPrPage)
  },
  {
    path: 'sobremesas',
    loadComponent: () => import('./pages/sobremesas/sobremesas.page').then( m => m.SobremesasPage)
  },
];
