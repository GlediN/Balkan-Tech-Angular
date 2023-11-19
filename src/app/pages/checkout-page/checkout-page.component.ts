import { Component } from '@angular/core';
import { CartService } from "../../services/cart.service";
import {CheckoutService} from "../../services/checkout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {
  userData: any = {
    name: '',
    surname: '',
    email: '',
    contactNumber: '',
    address: '',
    totalPrice:this.totalPrice,
  };

  constructor(private cartService: CartService,
              private checkOutService: CheckoutService,
              private router:Router) {
  }

  get clientOrder() {

    return this.cartService.getCartItems();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  placeOrder() {
    this.userData.orderItems = this.clientOrder.map(item => ({
      productId: item.id.toString(),
      quantity: item.quantity !== undefined ? item.quantity.toString() : '1'
    }));

    this.checkOutService.checkout(this.userData).subscribe();
    this.cartService.clearCart();
    this.router.navigate(['/home-page']);
  }
}
