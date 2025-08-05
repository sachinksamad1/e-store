import { Component } from '@angular/core';
import { Header } from './header/header';
import { CatNavigation } from './catnavigation/catnavigation';
import { Sidenavigation } from './sidenavigation/sidenavigation';
import { Products } from "../products/products";

@Component({
  selector: 'app-home',
  imports: [Header, CatNavigation, Sidenavigation, Products],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
