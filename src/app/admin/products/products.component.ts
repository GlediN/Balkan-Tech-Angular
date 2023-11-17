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
    categoryId: number;
    productPhotos: ProductPhoto[];
    isEditing?: boolean;
    editableData?: {
        name: string;
        description: string;
        quantity: number;
        price: number;
        discount: number;
        categoryId:number;
        productPhotos: ProductPhoto[];
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
    categoryName:string = '';
    products: any[] = [];

    constructor(private route: ActivatedRoute, private productService: ProductService) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.categoryId = +params.get('categoryId')! || null;
            this.categoryName = params.get('name')! || '';
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
                        categoryId: this.categoryId,
                    }));
                }
            );
        }
    }


    addProduct(productData: any) {
        productData.categoryId = this.categoryId;
        this.productService.addProduct(productData).subscribe(
            (response) => {
                this.loadProducts();
            }
        );
    }

        deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      (response) => {
        this.loadProducts();
      }
    );
  }

    editProduct(product: Product) {
        if (product.editableData) {
            // Include categoryId in the editableData
            product.editableData.categoryId = product.categoryId;
            this.products.forEach(p => (p.isEditing = false));
            product.isEditing = true;
            product.editableData = JSON.parse(JSON.stringify(product));
        }
    }
    saveEditedProduct(product: Product) {
        if (product.editableData) {
            console.log('Before Update - product.categoryId:', product.categoryId);
            console.log('Before Update - product.editableData:', product.editableData);

            const request = {
                id: product.id,
                categoryId: product.categoryId,
                name: product.editableData.name,
                quantity: product.editableData.quantity,
                description: product.editableData.description,
                price: product.editableData.price,
                discount: product.editableData.discount,
            };
            const index = this.products.findIndex(p => p.id === product.id);
            if (index !== -1) {
                this.productService.updateProduct(request).subscribe(
                    (response: any) => {
                        console.log('After Update - Response:', response);
                        this.products[index] = response;
                        product.isEditing = false;
                        this.loadProducts();
                    }
                );
            }
        }
    }



    cancelEdit(product: Product) {
        product.isEditing = false;
    }


}
