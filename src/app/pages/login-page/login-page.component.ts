import { Component } from '@angular/core';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
faPerson=faUser;
faEnveloper=faEnvelope;
faLock=faLock;
faKey=faKey;
  protected readonly faEnvelope = faEnvelope;
}
