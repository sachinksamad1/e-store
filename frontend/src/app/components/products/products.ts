import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductListItem } from './products.type';
import { CommonModule } from '@angular/common';
import { Ratings } from "../ratings/ratings";

@Component({
  selector: 'app-products',
  imports: [CommonModule, Ratings],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers: [ProductsService]
})
export class Products {
  products: ProductListItem[] = [];

  constructor(productsService: ProductsService){
    this.products = productsService.getProductsList();
  }
}
