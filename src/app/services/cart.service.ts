import { EventEmitter, Injectable } from '@angular/core';

interface CartItems {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItems[] = this.getStoredCart();
  private cartKey = 'cart';

  cartItemsChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.cartItems = this.getStoredCart();
  }

  addToCart(product: CartItems, quantity: number = 1) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 0) + quantity;
    } else {
      const productWithQuantity: CartItems = { ...product, quantity: quantity };
      this.cartItems.push(productWithQuantity);
    }
    this.cartItemsChanged.emit();
    this.storeCart();
  }

  increaseQuantity(productId: number) {
    const existingItem = this.cartItems.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 0) + 1;
      this.cartItemsChanged.emit();
      this.storeCart();
    }
  }

  decreaseQuantity(productId: number) {
    const existingItem = this.cartItems.find((item) => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity && existingItem.quantity > 0) {
        existingItem.quantity = existingItem.quantity - 1;

        if (existingItem.quantity === 0) {
          this.removeFromCart(productId);
        } else {
          this.cartItemsChanged.emit();
          this.storeCart();
        }
      }
    }
  }

  removeFromCart(productId: number) {
    const index = this.cartItems.findIndex((item) => item.id === productId);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsChanged.emit();
      this.storeCart();
    }
  }

  getCartItems(): CartItems[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsChanged.emit();
    this.storeCart();
    return this.cartItems;
  }

  getTotalQuantity() {
    return this.cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  }

  private storeCart(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
  }

  private getStoredCart(): CartItems[] {
    const storedCart = localStorage.getItem(this.cartKey);
    return storedCart ? JSON.parse(storedCart) : [];
  }


}
