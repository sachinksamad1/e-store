import { Injectable } from '@angular/core';
import { products } from './products.data';
import { ProductListItem } from './products.type';

@Injectable()
export class ProductsService {
  constructor() {}

  getProductsList(): ProductListItem[] {
    return products;
  }
}
