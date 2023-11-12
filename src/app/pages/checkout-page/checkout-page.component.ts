import {Component} from '@angular/core';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {
  getTotalPrice(clientOrder: string | any[]) {
  let totalPrice = 0;

  for (let i = 0; i < clientOrder.length; i++) {
    // Assuming the 'price' property contains numerical values
    const productPrice = parseFloat(clientOrder[i].price);
    const productQuantity =parseFloat(clientOrder[i].quantity)

    // Check if the conversion to a number was successful
    if (!isNaN(productPrice)) {
      productPrice*productQuantity;
      totalPrice += productPrice;
    } else {
      console.error(`Invalid price for product '${clientOrder[i].productname}'`);
    }
  }

  return totalPrice;
}
  name: string = '';
  surname: string = '';
  contactNumber: string = '';
  email: string = '';
  address: string = '';
  country: string = '';
  quantity:string = '';
  clientOrder = [
    {
      productname: '',
      price: 0,
    },
    {
      productname:'',
      price: 0,
    }]
  totalPrice: number = this.getTotalPrice(this.clientOrder);



  userData = [
    {
      firstname: '',
      lastname: 'test1',
      email: 'test2',
      phone: 'test3',
      address: 'test4',
      country: 'test5',
      city: 'test7',

    },]


}
