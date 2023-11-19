import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  categoryId: number;
}

interface Category {
  id: number;
  name: string;
  photo: string;
  parentId: number;
}

@Component({
  selector: 'app-product-list-body',
  templateUrl: './product-list-body.component.html',
  styleUrls: ['./product-list-body.component.scss']
})
export class ProductListBodyComponent implements OnInit {

  mainCategories: Category[] = [];
  subcategories: Category[] = [];
  products: { [key: number]: Product[] } = {};

  constructor(
      private categoryService: CategoryService,
      private cartService: CartService,
      private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categoryService.getMainCategories().subscribe((mainCategories: Category[]) => {
      this.mainCategories = mainCategories;

      this.categoryService.getCategories().subscribe((categories: Category[]) => {
        this.subcategories = categories.filter(category => category.parentId !== null && category.parentId !== null);

        this.subcategories.forEach(subcategory => {
          this.productService.getProductsByCategory(subcategory.id).subscribe((products: Product[]) => {
            this.products[subcategory.id] = products;
          });
        });
      });
    });
  }

  getSubcategories(parentId: number): Category[] {
    return this.subcategories.filter(subcategory => subcategory.parentId == parentId);
  }

  getProductsByCategory(subcategoryId: number): Product[] {
    return this.products[subcategoryId] || [];
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
