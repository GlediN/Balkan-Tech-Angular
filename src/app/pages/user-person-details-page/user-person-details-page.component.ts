import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CartService} from "../../services/cart.service";
import {CheckoutService} from "../../services/checkout.service";




@Component({
  selector: 'app-user-person-details-page',
  templateUrl: './user-person-details-page.component.html',
  styleUrls: ['./user-person-details-page.component.scss']
})
export class UserPersonDetailsPageComponent  {
  userData: any = {
    name: '',
    surname: '',
    email: '',
    contactNumber: '',
    address: '',
  };
  constructor(private cartService: CartService,
              private checkOutService: CheckoutService,
              private router:Router,
              private userInfo:UserService) {
  }

  ngOnInit() {
    this.userInfo1.subscribe(user => {
      this.userData = user;
    });
  }
  get userInfo1():Observable<UserService>{
    return this.userInfo.getUserByEmail(sessionStorage.getItem("email")!);
  }

}
