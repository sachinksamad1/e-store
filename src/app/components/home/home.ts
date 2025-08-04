import { Component } from '@angular/core';
import { Header } from './header/header';
import { CatNavigation } from './catnavigation/catnavigation';

@Component({
  selector: 'app-home',
  imports: [Header, CatNavigation],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
