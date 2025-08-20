import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { ProductsComponent } from '../products/products.component';
import { CategoryService } from './services/category/category.service';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { ProductsService } from './services/product/products.service';

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
  providers: [CategoryService, CategoriesStoreItem, ProductsStoreItem, ProductsService],
})
export class HomeComponent {
  constructor (
    private categoriesStoreItem: CategoriesStoreItem,
    private productsStoreItem: ProductsStoreItem
  
  ){
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }
  onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts({ subCategory: subCategoryId });
  }
}
