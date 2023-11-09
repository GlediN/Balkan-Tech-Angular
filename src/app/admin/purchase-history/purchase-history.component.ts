import { Component } from '@angular/core';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faMoneyBill1Wave} from "@fortawesome/free-solid-svg-icons/faMoneyBill1Wave";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons/faShoppingBasket";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent {
faEnvelope=faEnvelope;
faMoeny=faMoneyBill1Wave;
faBasket=faShoppingBasket;
  protected readonly faUserCircle = faUserCircle;

users = [
    {
      id:"1",
      date:"12/12/1222",
      name:"emri",
      surname:"mbiemri",
      email:"asdasd@gmail.com",
      address:"adresa",
      receipt:"asdasdasd.pdf",
  totalPrice:"150"
    },
  {
    id:"2",
    date:"12/12/1222",
    name:"emri2",
    surname:"mbiemri2",
    email:"asdasd@gmail.com2",
    address:"adresa2",
    receipt:"asdasdasd2.pdf",
    totalPrice:"1502"
  },

    ]



}

