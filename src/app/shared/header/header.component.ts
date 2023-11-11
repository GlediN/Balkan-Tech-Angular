import {Component, OnInit} from '@angular/core';
import { faHeart, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginPageComponent} from "../../pages/login-page/login-page.component";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})export class HeaderComponent  implements OnInit{
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faUserCircle=faUserCircle;
  userLocation: any;
  temperature: number = 0;
  iconSrc: string ="";
  constructor(private modalService:NgbModal,
              private weatherService: WeatherService) {
  }

    ngOnInit(): void {
      this.weatherService.getUserLocation().subscribe((location) => {
        this.userLocation = location;
        this.getTemperatureAndDisplay();
      });
    }

  getTemperatureAndDisplay() {
    if (this.userLocation && this.userLocation.city) {
      this.weatherService.getTemperature(this.userLocation.city).subscribe((weather) => {
        this.temperature = Math.round(weather.main.temp);
        const iconCode = weather.weather[0].icon;
        this.iconSrc = this.getIconUrl(iconCode);
      });
    }
  }

  getIconUrl(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

  openLoginForm(){
    this.modalService.open(LoginPageComponent)
  }

  isNavbarCollapsed = true;

}


