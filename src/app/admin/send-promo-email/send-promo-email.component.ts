import { Component } from '@angular/core';
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons/faShoppingBasket";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EmailMessageComponent} from "./email-message/email-message.component";

@Component({
  selector: 'app-send-promo-email',
  templateUrl: './send-promo-email.component.html',
  styleUrls: ['./send-promo-email.component.scss']
})
export class SendPromoEmailComponent {
  emailList=[
    {
      id: 1,
      email:"gledi.com",
    },
    {
      id: 2,
      email: "arbri.com",
    },
    {
      id:3,
      email:"rezart.com",
    },

  ]
  constructor(private modalService:NgbModal) {
  }
  ngOnInit():void{
  }
  openForm(){
    this.modalService.open(EmailMessageComponent);
  }
    protected readonly faShoppingBasket = faShoppingBasket;


  emailSubject: string = '';
  emailBody: string = '';

  sendEmails() {

  }


  sendEmail(){}


}

