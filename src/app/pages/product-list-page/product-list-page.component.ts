import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";



@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent {

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



  category = [
    {
      name: 'Smartphone',
      types:[ {name:'iphone'},
          {name:'samsung'}]
    },
      {
          name: 'Smartwaches',
          types:[ {name:'apple'},
              {name:'chinese'},
              {name:'vietnam'}]
      },
      {
          name: 'Laptot',
          types:[ {name:'iphone'},
              {name:'samsung'}]
      },


  ]


  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('Item added to cart:', product);
  }






}
