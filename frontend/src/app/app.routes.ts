import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsGalleryComponent } from './components/home/products-gallery/products-gallery.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
    children: [
      {
        path: 'products',
        component: ProductsGalleryComponent,
      },
    ],
  },
  { path: '', redirectTo: '/home/products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];