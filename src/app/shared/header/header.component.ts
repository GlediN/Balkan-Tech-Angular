import { Component } from '@angular/core';
import { faHeart, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faUserCircle=faUserCircle;
}
