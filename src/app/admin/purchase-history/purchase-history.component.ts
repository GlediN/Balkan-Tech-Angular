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
}
