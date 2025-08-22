import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { ProductsComponent } from '../products/products.component';
import { CategoryService } from './services/category/category.service';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { ProductsService } from './services/product/products.service';
import { SearchKeyword } from './types/searchKeyword.type';

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
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productsStoreItem: ProductsStoreItem
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }

  // ngOnInit(): void {
  //   this.categoriesStoreItem.loadCategories();
  //   this.productsStoreItem.loadProducts();
  // }

  onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts({ subcategoryid: subCategoryId });
  }

  onSelectCategory(mainCategoryId: number): void {
    this.productsStoreItem.loadProducts({ maincategoryid: mainCategoryId });
  }

  onSearchKeyword(searchKeyword: SearchKeyword): void {
    this.productsStoreItem.loadProducts({
      maincategoryid: searchKeyword.categoryId,
      keyword: searchKeyword.keyword,
    });
  }
}
