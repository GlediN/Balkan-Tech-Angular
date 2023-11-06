import {Component, OnInit} from '@angular/core';
import { faHeart, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginPageComponent} from "../../pages/login-page/login-page.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faUserCircle=faUserCircle;
  constructor(private modalService:NgbModal) {
  }
  ngOnInit():void{

  }
  openLoginForm(){
    const modalRef= this.modalService.open(LoginPageComponent)
  }
}

