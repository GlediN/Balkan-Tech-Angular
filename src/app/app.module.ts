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
import {FormsModule} from "@angular/forms";
import { BodyComponent } from './admin/body/body.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { AdminComponent } from './admin/admin.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PurchaseHistoryComponent } from './admin/purchase-history/purchase-history.component';
import { SendPromoEmailComponent } from './admin/send-promo-email/send-promo-email.component';
import { EmailMessageComponent } from './admin/send-promo-email/email-message/email-message.component';
import {HttpClientModule} from "@angular/common/http";
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import {CheckoutPageComponent} from "./pages/checkout-page/checkout-page.component";


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
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    ManageCategoriesComponent,
    UserDetailsComponent,
    AdminComponent,
    SidenavComponent,
    PurchaseHistoryComponent,
    SendPromoEmailComponent,
    EmailMessageComponent,
    SignupPageComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
