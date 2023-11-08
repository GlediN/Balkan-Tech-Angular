import { Component } from '@angular/core';
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons/faShoppingBasket";

@Component({
  selector: 'app-send-promo-email',
  templateUrl: './send-promo-email.component.html',
  styleUrls: ['./send-promo-email.component.scss']
})
export class SendPromoEmailComponent {
  emailList=[
    "gledi.com",
    "rezart.com",
    "arber.com"
  ]

    protected readonly faShoppingBasket = faShoppingBasket;
}
