import {Component} from '@angular/core';

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.scss']
})
export class CategoryCarouselComponent{

  categories = [
    {
      name: 'Smartphones',
      imageUrl: "assets/images/categories/smartphones.jpg",
      description:'Find latest smartphones'
    },
    {
      name: 'Laptops',
      imageUrl: "assets/images/categories/laptops.jpg",
      description:'Find latest laptops'
    },
    {
      name: 'Smartwatches',
      imageUrl: "assets/images/categories/watches.jpg",
      description:'Find latest smartwaches'
    },
    {
      name: 'Drones',
      imageUrl: "assets/images/categories/drones.jpg",
      description:'Find latest drones'
    }

  ];


}
