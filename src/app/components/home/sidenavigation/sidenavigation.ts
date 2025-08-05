import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from '../services/category.service';
import { Category } from '../types/category';

@Component({
  selector: 'app-sidenavigation',
  imports: [FontAwesomeModule],
  templateUrl: './sidenavigation.html',
  styleUrl: './sidenavigation.css'
})
export class Sidenavigation {
  faAnglrDown = faAngleDown;

  categories: Category[] = [];

  constructor(cateregoryService: CategoryService) {
    this.categories = cateregoryService.getAllCategories();
  }

  getCategories(parent_category_id?: number): Category[] {
    return this.categories.filter(
      (category) => category.parent_category_Id === parent_category_id
    );
  }
}
