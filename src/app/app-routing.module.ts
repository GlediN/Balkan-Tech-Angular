import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProductListPageComponent} from "./pages/product-list-page/product-list-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";


const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'products', component: ProductListPageComponent},
  { path: 'about-us', component: AboutUsPageComponent},
  { path: 'product-detail', component: ProductDetailsComponent},
  { path: "login",component:LoginPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


