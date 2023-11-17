import { Component } from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-list-filtered',
  templateUrl: './product-list-filtered.component.html',
  styleUrls: ['./product-list-filtered.component.scss']
})
export class ProductListFilteredComponent {


  categories = [
    {
      categoryName: 'Smartphone',
      types: [
        {
          typeName: 'Iphone',
          products: [{
            productName: 'iPhone 15 Pro Max',
            imageUrl: 'assets/images/products/product-1.jpg',
            price: '700'
          },
            {
              productName: 'iPhone 14 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '1000'
            },
            {
              productName: 'iPhone 13 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '900'
            },
            {
              productName: 'iPhone 12 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '800'
            },
            {
              productName: 'iPhone 11 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '700'
            }

          ]
        },
        {
          typeName: 'Samsung',
          products: [{
            productName: 'iPhone 15 Pro Max',
            imageUrl: 'assets/images/products/product-1.jpg',
            price: '700'
          },
            {
              productName: 'iPhone 14 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '1000'
            },
            {
              productName: 'iPhone 13 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '900'
            },
            {
              productName: 'iPhone 12 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '800'
            },
            {
              productName: 'iPhone 11 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '700'
            }

          ]
        }
      ]
    },
    {
      categoryName: 'Smartwatches',
      types: [
        {
          typeName: 'IWatch',
          products: [{
            productName: 'iWatch 15 Pro Max',
            imageUrl: 'assets/images/products/product-1.jpg',
            price: '700'
          },
            {
              productName: 'iWatch 14 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '1000'
            },
            {
              productName: 'iWatch 13 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '900'
            },
            {
              productName: 'iWatch 12 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '800'
            },
            {
              productName: 'iWatch 11 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '700'
            }

          ]
        },
        {
          typeName: 'SamWatch',
          products: [{
            productName: 'SamWatch 15 Pro Max',
            imageUrl: 'assets/images/products/product-1.jpg',
            price: '700'
          },
            {
              productName: 'SamWatch 14 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '1000'
            },
            {
              productName: 'SamWatch 13 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '900'
            },
            {
              productName: 'SamWatch 12 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '800'
            },
            {
              productName: 'SamWatch 11 Pro Max',
              imageUrl: 'assets/images/products/product-1.jpg',
              price: '700'
            }]
        }]
    }]


  constructor(private cartService: CartService) {
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('Item added to cart:', product);
  }

}
