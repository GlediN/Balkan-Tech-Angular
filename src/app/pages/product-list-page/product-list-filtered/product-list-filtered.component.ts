import { Component } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ProductService} from "../../../services/product.service";
import {CategoryService} from "../../../services/category.service";
import {ActivatedRoute} from "@angular/router";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  categoryId:number;
}

interface Category {
  id: number;
  name: string;
  photo: string;
  parentId: string;
}
@Component({
  selector: 'app-product-list-filtered',
  templateUrl: './product-list-filtered.component.html',
  styleUrls: ['./product-list-filtered.component.scss']
})
export class ProductListFilteredComponent {

  mainCategories: any[] = [];
  subcategories: any[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];
  selectedCategoryName: Category | null = null;

  constructor(private categoryService: CategoryService,
              private cartService: CartService,
              private productService: ProductService,
  private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoryService.getMainCategories().subscribe((mainCategories: Category[]) => {
      this.mainCategories = mainCategories;

      this.categoryService.getCategories().subscribe((categories: Category[]) => {
        this.subcategories = categories.filter(category => category.parentId !== null && category.parentId !== 'null');
      });
    });

         this.route.paramMap.subscribe(params => {
          const categoryId = Number(params.get('categoryId'));
          if (!isNaN(categoryId)) {
              this.selectedCategoryId = categoryId;
              this.productService.getProductsByCategory(categoryId).subscribe(
                  (data: Product[]) => {
                      this.products = data;
                  }
              );

              this.categoryService.getCategoryById(categoryId).subscribe(
                  (category: Category) => {
                      this.selectedCategoryName = category;
                  }
              );
          }
      });

  }



  addToCart(product: any) {
    this.cartService.addToCart(product, 1);
    console.log('Item added to cart:', product);
  }


}
