import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/product.service";
import {CategoryService} from "../../services/category.service";

interface Category {
  id: number;
  name: string;
  photo: string;
  parentId: string;
}

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent {

  constructor(private categoryService:CategoryService) {
  }
  mainCategories: any[] = [];
  subcategories: any[] = [];


  ngOnInit(): void {

    this.categoryService.getMainCategories().subscribe((mainCategories: Category[]) => {
      this.mainCategories = mainCategories;

      this.categoryService.getCategories().subscribe((categories: Category[]) => {
        this.subcategories = categories.filter(category => category.parentId !== null && category.parentId !== 'null');
      });
    });

  }

  getSubcategories(parentId: string): Category[] {
    return this.subcategories.filter(subcategory => subcategory.parentId == parentId);
  }

}
