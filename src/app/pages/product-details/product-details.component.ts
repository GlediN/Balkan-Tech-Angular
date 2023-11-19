import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../../services/cart.service";

interface CartItems {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity?: number;
}

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    categoryId: number;
}

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
    providers: [NgbCarouselConfig],
})
export class ProductDetailsComponent implements OnInit {
    product: any;
    public quantity: number = 1;

    constructor(
        private productService: ProductService,
        private config: NgbCarouselConfig,
        private route: ActivatedRoute,
        public cartService: CartService
    ) {
        config.interval = 3000;
        config.wrap = true;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = false;
    }

    ngOnInit() {
        const idParam = this.route.snapshot.paramMap.get('id');
        const productId = idParam ? +idParam : null;

        if (productId !== null) {
            this.loadProductDetails(productId);
        } else {
            // Handle the case where 'id' is null (e.g., redirect to an error page)
            console.error("Invalid or missing 'id' parameter");
        }
    }

    loadProductDetails(id: number) {
        this.productService.getProductsById(id).subscribe(
            (data: any) => {
                this.product = data;
            },
            (error) => {
                console.error('Error fetching product details:', error);
            }
        );
    }

    addToCart(product: Product, quantity: number) {
        this.cartService.addToCart(product, quantity);
    }

    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    increaseQuantity() {
        this.quantity++;
    }
}
