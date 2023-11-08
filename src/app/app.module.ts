import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { HeaderComponent } from './shared/header/header.component';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ProductListPageComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
