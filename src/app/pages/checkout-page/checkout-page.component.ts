import {Component, OnInit} from '@angular/core';
import { CartService } from "../../services/cart.service";
import {CheckoutService} from "../../services/checkout.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit{
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
              private router:Router,
              private userInfo:UserService) {
  }

  ngOnInit() {
    this.userInfo1.subscribe(user => {
      this.userData = user;
    });
  }

  get clientOrder() {

    return this.cartService.getCartItems();
  }


  get userInfo1():Observable<UserService>{
    return this.userInfo.getUserByEmail(sessionStorage.getItem("email")!);
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
