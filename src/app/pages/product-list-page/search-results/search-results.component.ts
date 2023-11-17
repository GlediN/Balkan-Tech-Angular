import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit{


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


  constructor(private cartService: CartService,
              private productService: ProductService,
              private route:ActivatedRoute,
              private httpClient:HttpClient) {
  }

  searchResults: Product[] = [];
searchParam!:string;

  ngOnInit() {
    console.log('SearchResultsComponent ngOnInit executed');
    this.route.queryParams.subscribe((params) => {
      this.searchParam = params['param'];
      if (this.searchParam) {
        this.productService.getProductsBySearch(this.searchParam).subscribe((results) => {
          this.searchResults = results;
        });
      }
    });
  }


  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('Item added to cart:', product);
  }

}
