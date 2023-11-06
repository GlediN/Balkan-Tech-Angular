import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { HeaderComponent } from './shared/header/header.component';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryCarouselComponent } from './pages/home-page/category-carousel/category-carousel.component';
import { MostSoldProductsComponent } from './pages/home-page/most-sold-products/most-sold-products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListPageComponent,
    HeaderComponent,
    HomePageComponent,
    CategoryCarouselComponent,
    MostSoldProductsComponent,
    ProductDetailsComponent,
    AboutUsPageComponent,

    HomePageComponent,
    FooterComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
