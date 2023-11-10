import { Component } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product = {
    id: '2',
    name: 'Smartphone2',
    images: [
      "assets/images/products/product-1.jpg",
      "assets/images/products/product-2.jpg",
      "assets/images/products/product-3.jpg",
    ],
    description: 'Test Description',
    price: '150'
  };

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.showNavigationArrows =true;
    config.showNavigationIndicators = false;
  }


}
