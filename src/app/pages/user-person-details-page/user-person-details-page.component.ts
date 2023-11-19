import { JwtHelperService } from '@auth0/angular-jwt';
import {Component, OnInit} from "@angular/core";


@Component({
  selector: 'app-user-person-details-page',
  templateUrl: './user-person-details-page.component.html',
  styleUrls: ['./user-person-details-page.component.scss']
})
export class UserPersonDetailsPageComponent {
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
  decodedToken: any;
  role:string='';


  // ngOnInit(): void {
  //   console.log('ngOnInit called');
  //   this.decodeToken();
  // }
  //
  // decodeToken(): void {
  //   console.log('decodeToken called');
  //   const token = sessionStorage.getItem('token');
  //
  //   if (token) {
  //     try {
  //       console.log('Attempting to decode token');
  //       this.decodedToken = this.jwtHelper.decodeToken(token);
  //       console.log('Decoded token:', this.decodedToken);
  //
  //       // Access the decoded claims and update your component properties
  //       this.email = this.decodedToken.sub;
  //       this.role=this.decodedToken.role;
  //       console.log(this.decodedToken.role)
  //       // Add other properties as needed
  //     } catch (error) {
  //       console.error('Error decoding token:', error);
  //       // Handle error, e.g., redirect to login page
  //     }
  //   } else {
  //     console.log('Token not present, redirecting to login page');
  //     // Handle the case where the token is not present, e.g., redirect to login page
  //   }
  // }
}
