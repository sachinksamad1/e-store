import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../types/category';
import { CategoryService } from '../services/category/category.service';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';

@Component({
  selector: 'app-sidenavigation',
  imports: [FontAwesomeModule],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.css',
})
export class SidenavigationComponent {
  faAngleDown = faAngleDown;
  // categories: Category[] = [];

  // constructor(categoryService: CategoryService) {
  //   categoryService.getAllCategories().subscribe((categories) => {
  //     this.categories = categories;
  //   });
  // }

  private categoriesStore = inject(CategoriesStoreItem);

  readonly categories = this.categoriesStore.categories;


  getCategories(parentCategoryId?: number): Category[] {
    return this.categories().filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null
    );
  }
}
