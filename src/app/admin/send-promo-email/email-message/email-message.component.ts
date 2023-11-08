import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-email-message',
  templateUrl: './email-message.component.html',
  styleUrls: ['./email-message.component.scss']
})
export class EmailMessageComponent {
  constructor(private modalService:NgbModal) {
  }
  ngOnInit():void{
  }
  closeForm(){
    this.modalService.dismissAll(EmailMessageComponent);
  }
}
