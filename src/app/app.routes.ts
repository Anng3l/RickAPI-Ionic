import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { DetallesPage } from './detalles/detalles.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'detalles',
    component: DetallesPage
  },
  /*
  {
    path: 'detalles',
    loadComponent: () => import('./detalles/detalles.page').then( m => m.DetallesPage)
  },
  */
];