import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../ratings/ratings.component';
import { ProductsStoreItem } from '../home/services/product/products.storeItem';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RatingsComponent, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  faBoxOpen = faBoxOpen;
  constructor(public productsStoreItem: ProductsStoreItem){}
}
