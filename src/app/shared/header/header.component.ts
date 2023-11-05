import { Component } from '@angular/core';
import { faHeart, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
}
