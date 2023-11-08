import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProductListPageComponent} from "./pages/product-list-page/product-list-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AboutUsPageComponent} from "./pages/about-us-page/about-us-page.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";
import {AdminComponent} from "./admin/admin.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {ProductsComponent} from "./admin/products/products.component";
import {ManageCategoriesComponent} from "./admin/manage-categories/manage-categories.component";
import {UserDetailsComponent} from "./admin/user-details/user-details.component";
import {SendPromoEmailComponent} from "./admin/send-promo-email/send-promo-email.component";
import {PurchaseHistoryComponent} from "./admin/purchase-history/purchase-history.component";


const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'products', component: ProductListPageComponent},
  { path: 'about-us', component: AboutUsPageComponent},
  { path: 'product-detail', component: ProductDetailsComponent},
  { path: "login",component:LoginPageComponent},
  { path: "signup",component:LoginPageComponent},
  { path: "dashboard",component:AdminComponent,
  children:[{
    path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'manage-categories', component: ManageCategoriesComponent},
    {path: 'user-details', component: UserDetailsComponent},
    {path: 'send-promo-email', component: SendPromoEmailComponent},
    {path: 'purchase-history', component: PurchaseHistoryComponent}

  ]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


