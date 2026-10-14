import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'ModoConectado | Tecnología y automatización',
  },
  {
    path: 'productos',
    loadComponent: () => import('./products/products.component').then(module => module.ProductsComponent),
    title: 'Productos | ModoConectado',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
