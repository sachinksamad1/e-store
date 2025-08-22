import { Component, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faUserCircle,
  // faHeart,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';
import { SearchKeyword } from '../types/searchKeyword.type';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;

  readonly seachClicked = output<SearchKeyword>();

  constructor(public categoryStore: CategoriesStoreItem){}

  onClickSearch(keyword: string, categoryId: string): void{
    this.seachClicked.emit({categoryId: parseInt(categoryId),
      keyword: keyword,
    });
  }
}
