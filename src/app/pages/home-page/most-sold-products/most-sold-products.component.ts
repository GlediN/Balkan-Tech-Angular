import {Component, OnInit} from '@angular/core';
import {faCartShopping, faSearch} from "@fortawesome/free-solid-svg-icons";
import {CartService} from "../../../services/cart.service";
import {ProductService} from "../../../services/product.service";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
@Component({
  selector: 'app-most-sold-products',
  templateUrl: './most-sold-products.component.html',
  styleUrls: ['./most-sold-products.component.scss']
})
export class MostSoldProductsComponent implements OnInit{
  mostSoldProducts: Product[] = [];

  ngOnInit() {
    this.getMostSoldProducts();
  }

  constructor(private cartService: CartService,
              private productService: ProductService) {}

  getMostSoldProducts(): void {
    this.productService.getMostSoldProducts().subscribe(
      (data: Product[]) => {
        this.mostSoldProducts = data.slice(0, 12);
      });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product, 1);
    console.log('Item added to cart:', product);
  }

}
