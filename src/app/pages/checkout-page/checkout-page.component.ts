import { Component } from '@angular/core';

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

  clientOrder = [
    {
      productname: 'p',
      price: 'p1',


    },
    {
      productname: 'p2',
      price: 'p1',


    },
    {
      productname: 'p',
      price: 'p1',


    }]
}
