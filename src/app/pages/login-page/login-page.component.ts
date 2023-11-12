import { Component } from '@angular/core';
import {faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {


  constructor(private modalService:NgbModal,
              private userService: UserService,
              private router:Router) {
  }
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLock = faLock;

  closeForm() {
    this.modalService.dismissAll();
  }


  email: string = "";
  password: string = "";
    login() {
        const credentials = {
            email: this.email,
            password: this.password
        };
        this.userService.login(credentials).subscribe(
            (response: any) => {
                localStorage.setItem('token', response.token);
                this.router.navigate(['/dashboard']);
            },
            (error) => {
                console.error('Login failed:', error);
               }
        );
        this.modalService.dismissAll();
    }

}
