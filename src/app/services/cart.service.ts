import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];
  cartItemsChanged: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  addToCart(product: any) {
    const existingItem = this.cartItems.find((item) => item.product.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }

    this.cartItemsChanged.emit();
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsChanged.emit();
    return this.cartItems;
  }

  getTotalQuantity() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

}
