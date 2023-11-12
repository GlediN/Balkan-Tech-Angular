import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {

  userData = [
    {
      firstname: '',
      lastname: 'test1',
      email: 'test2',
      phone:'test3',
      address:'test4',
      country:'test5',
      city:'test7',

    },]
  constructor(private cartService: CartService) {
    console.log('Cart items in CheckoutPageComponent:', this.clientOrder);

  }
  get clientOrder() {
    return this.cartService.getCartItems();
  }
  getTotal() {
    return this.clientOrder.reduce((total, item) => total + (parseFloat(item.product.price) * item.quantity), 0);
  }

}
