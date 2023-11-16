import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

interface Product {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    discount: number;
    soldQty: number;
    productPhotos: ProductPhoto[];
    isEditing?: boolean;
    editableData?: {
        name: string;
        description: string;
        quantity: number;
        price: number;
        discount: number;
        imageUrls?: string;
    };
}

interface ProductPhoto {
    id: number;
    productPhoto: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})



export class ProductsComponent implements OnInit{
    categoryId: number | null = null;
    products: any[] = [];

    constructor(private route: ActivatedRoute, private productService: ProductService) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.categoryId = +params.get('categoryId')! || null;
            if (this.categoryId !== null) {
                this.loadProducts();
            }
        });
    }

    loadProducts() {
        if (this.categoryId !== null) {
            this.productService.getProductsByCategory(this.categoryId).subscribe(
                (data) => {
                    this.products = data.map((product: Product) => ({
                        ...product,
                        isEditing: false,
                        editableData: { ...product },
                    }));
                }
            );
        }
    }

    addProduct(productData: any) {
        this.productService.addProduct(productData).subscribe(
            (response) => {
                console.log(response);
                this.loadProducts();
            },
            (error) => {
                console.error('Error adding product:', error);
            }
        );
    }

  updateProduct(productData: any) {
    this.productService.updateProduct(productData).subscribe(
      (response) => {
        console.log(response);
        this.loadProducts();
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      (response) => {
        console.log(response);
        this.loadProducts();
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }

    editProduct(product: Product) {
        this.products.forEach(p => (p.isEditing = false));
        product.isEditing = true;
        product.editableData = JSON.parse(JSON.stringify(product));
    }
    saveEditedProduct(product: Product) {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products[index] = { ...product.editableData };
            product.isEditing = false;
        }
    }
    cancelEdit(product: Product) {
        product.isEditing = false;
    }


}
