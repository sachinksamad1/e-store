import { Component, output } from '@angular/core';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';
import { Category } from '../types/category';

@Component({
  selector: 'app-catnavigation',
  imports: [],
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.css',
})
export class CatnavigationComponent {
  readonly categoryClicked = output<number>();
  constructor(public categoryStore: CategoriesStoreItem) {}

  onCategoryClick(mainCategory: Category) {
    this.categoryClicked.emit(mainCategory.id);
  }
}
