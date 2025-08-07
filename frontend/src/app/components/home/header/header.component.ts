import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faUserCircle,
  faHeart,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
}
