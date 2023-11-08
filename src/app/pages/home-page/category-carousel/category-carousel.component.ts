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
      imageUrl: "assets/images/categories/carousel-1.jpg",
      description:'Find latest smartphones'
    },
    {
      name: 'Laptops',
      imageUrl: "assets/images/categories/carousel-2.jpg",
      description:'Find latest laptops'
    },
    {
      name: 'Tablets',
      imageUrl: "assets/images/categories/carousel-3.jpg",
      description:'Find latest tablets'
    },
    {
      name: 'Smartwatches',
      imageUrl: "assets/images/categories/carousel-1.jpg",
      description:'Find latest smartwaches'
    },
    {
      name: 'Gaming',
      imageUrl: "assets/images/categories/carousel-2.jpg",
      description:'Find latest gaming devices'
    },
    {
      name: 'Drones',
      imageUrl: "assets/images/categories/carousel-3.jpg",
      description:'Find latest smartphones'
    },
    {
      name: 'Accessories',
      imageUrl: "assets/images/categories/carousel-1.jpg",
      description:'Find latest accessories'
    },

  ];


}
