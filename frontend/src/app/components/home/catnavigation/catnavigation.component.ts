import { Component } from '@angular/core';
import { Category } from '../types/category';
// import { CategoryService } from '../services/category.service';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';


@Component({
  selector: 'app-catnavigation',
  imports: [],
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.css',
})
export class CatnavigationComponent {
  // categories: Category[] = [];

  // constructor(categoryService: CategoryService){
  //   categoryService.getAllCategories().subscribe(categories =>
  //     this.categories = categories.filter(
  //       (category) => category.parent_category_id === null
  //     ))
  // }

  constructor(public categoryStore: CategoriesStoreItem){}
}
