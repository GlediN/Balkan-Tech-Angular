import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environmentVar} from "../../enovironment-variables/environment-var";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  name: string = '';
  surname: string = '';
  contactNumber: string = '';
  email: string = '';
  password: string = '';
  subscription: boolean = true;
  address: string = '';
  city: string = '';
  country: string = '';
  acceptTerms: boolean = false;

  constructor(private userService:UserService, private router: Router) {
  }
  isFormValid(): boolean {
    const isGeneralInfoValid =
        this.name.trim() !== '' &&
        this.surname.trim() !== '' &&
        this.contactNumber.trim() !== '' &&
        this.email.trim() !== '' &&
        this.password.trim() !== '';

    const isMailingDetailsValid =
        this.address.trim() !== '' &&
        this.city.trim() !== '' &&
        this.country.trim() !== '' &&
        this.acceptTerms === true;

    return isGeneralInfoValid && isMailingDetailsValid;
  }

  register(): void {
    if (this.isFormValid()) {
      const registrationData = {
        name: this.name,
        surname: this.surname,
        contactNumber: this.contactNumber,
        email: this.email,
        password: this.password,
        subscription: this.subscription,
        address: this.address,
        city: this.city,
        country: this.country,
        acceptTerms: this.acceptTerms,
      };

      this.userService.signup(registrationData).subscribe(
          (response: any) => {
            this.router.navigate(['/home-page']);
          },
          (error) => {
          }
      );
    }
  }



}
