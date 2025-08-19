import { Component } from '@angular/core';
import { ProductsService } from '../../components/home/services/product/products.service';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../ratings/ratings.component';
import { Product } from '../home/types/products.type';
import { ProductsStoreItem } from '../home/services/product/products.storeItem';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RatingsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(public productsStoreItem: ProductsStoreItem){}
}
