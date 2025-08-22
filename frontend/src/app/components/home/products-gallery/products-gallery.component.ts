import { Component } from '@angular/core';
import { ProductsComponent } from '../../products/products.component';
import { SidenavigationComponent } from '../sidenavigation/sidenavigation.component';
import { ProductsStoreItem } from '../services/product/products.storeItem';

@Component({
  selector: 'app-products-gallery',
  imports: [ProductsComponent, SidenavigationComponent],
  templateUrl: './products-gallery.component.html',
  styleUrl: './products-gallery.component.css',
})
export class ProductsGalleryComponent {
  constructor(private productsStoreItem: ProductsStoreItem) {}

  onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts({ subcategoryid: subCategoryId });
  }
}
