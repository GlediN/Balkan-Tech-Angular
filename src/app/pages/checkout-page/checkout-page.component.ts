import { Component } from '@angular/core';
import { CartService } from "../../services/cart.service";
import {CheckoutService} from "../../services/checkout.service";

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {
userData= {
  name: '',
  surname: '',
  contactNumber: '',
  address: '',
  totalPrice: '',
  email: '',
  orderItems: [
    {
      productId: '',
      quantity: ''
    },
  ]
}



// userData = [
//     {
//       firstname: '',
//       lastname: 'test1',
//       email: 'test2',
//       phone: 'test3',
//       address: 'test4',
//       country: 'test5',
//       city: 'test7',
//     },
//   ];

  constructor(private cartService: CartService,private checkoutService:CheckoutService ) {
  }
  get uniqueProductIds(): number[] {
    return this.clientOrder.map(orderItem => orderItem.id);
  }

  get clientOrder() {

    return this.cartService.getCartItems();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }
  checkout(){
  return this.checkoutService.checkout(this.userData)
  }
}
