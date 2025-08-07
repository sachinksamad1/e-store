import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
