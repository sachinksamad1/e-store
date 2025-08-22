import { Component, output } from '@angular/core';
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
  readonly categoryClicked = output<number>();
  constructor(public categoryStore: CategoriesStoreItem){}

  onCategoryClick(mainCategory: Category) {
    this.categoryClicked.emit(mainCategory.id);
  }
}
