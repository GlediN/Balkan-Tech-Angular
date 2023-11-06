import { Component } from '@angular/core';
import {faCartShopping, faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-most-sold-products',
  templateUrl: './most-sold-products.component.html',
  styleUrls: ['./most-sold-products.component.scss']
})
export class MostSoldProductsComponent {
  mostSoldProducts = [
    {
      name: 'Apple Headphone',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '100'
    },
    {
      name: 'iPhone 15 Pro Max',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '700'
    },

    {
      name: 'Samsung Galaxy S23',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '500'
    },

    {
      name: 'SmartWatch Apple S6',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '600'
    },
    {
      name: 'iPhone 15 Pro Max',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '100'
    },

    {
      name: 'Apple Headphone',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '100'
    },

    {
      name: 'SmartWatch Apple S6',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '300'
    },
    {
      name: 'iPhone 15 Pro Max',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '100'
    },

    {
      name: 'Samsung Galaxy S23',
      imageUrl: "assets/images/products/product-1.jpg",
      price: '200'
    },

    {
      name: 'SmartWatch Apple S6',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '300'
    },
    {
      name: 'Apple Headphone',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '200'
    },
    {
      name: 'iPhone 15 Pro Max',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '100'
    },

    {
      name: 'Samsung Galaxy S23',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '100'
    },

    {
      name: 'SmartWatch Apple S6',
      imageUrl: 'assets/images/products/product-1.jpg',
      price: '200'
    }

  ]

  protected readonly faSearch = faSearch;
  protected readonly faCartShopping = faCartShopping;
}
