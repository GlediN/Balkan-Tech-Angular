import { Component } from '@angular/core';
import {faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private modalService:NgbModal) {
  }
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLock = faLock;

  closeForm() {
    this.modalService.dismissAll();
  }


}
