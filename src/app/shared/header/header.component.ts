import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import { faHeart, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginPageComponent} from "../../pages/login-page/login-page.component";
import {WeatherService} from "../../services/weather.service";
import {CartService} from "../../services/cart.service";
import {NavigationStart, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {HttpClient} from "@angular/common/http";

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
  clientOrderCount: number = 0;
  constructor(private modalService:NgbModal,
              private weatherService: WeatherService,
              public cartService: CartService,
              private router: Router,
              private productService:ProductService,
              private httpClient:HttpClient) {
  }

    ngOnInit(): void {
      this.weatherService.getUserLocation().subscribe((location) => {
        this.userLocation = location;
        this.getTemperatureAndDisplay();
      });

      this.cartService.cartItemsChanged.subscribe(() => {
        this.clientOrderCount = this.cartService.getCartItems().length;
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




  showCartDropdown = false;
  @ViewChild('cartDropdown') cartDropdown!: ElementRef;


  @HostListener('document:click', ['$event'])
  documentClick() {
    this.closeCartDropdown();
  }
  private isClickInsideDropdown(event: Event): boolean {
    const clickedElement = event.target as HTMLElement;
    return this.cartDropdown.nativeElement.contains(clickedElement) ||
      Array.from(this.cartDropdown.nativeElement.children).some((child) => {
        return child instanceof HTMLElement && child.contains(clickedElement);
      });
  }

  isCartDropdownHovered = false;

  toggleCartDropdown(event: Event) {
    event.stopPropagation();
    this.showCartDropdown = !this.showCartDropdown;
  }

  closeCartDropdown() {
    this.showCartDropdown = false;
  }
  proceedToCheckout() {
    this.router.navigate(['/checkout']);
    this.showCartDropdown = false;
  }

    isNavbarCollapsed: boolean = true;
    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    searchParam:string='';
  searchProducts(searchParam: string) {
    console.log('Search clicked with parameter:', searchParam);
    if (searchParam.trim() !== '') {
      this.router.navigate(['/products/search', searchParam]);
    }
  }



}


