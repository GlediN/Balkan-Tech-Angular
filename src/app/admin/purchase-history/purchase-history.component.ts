import { Component } from '@angular/core';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faMoneyBill1Wave} from "@fortawesome/free-solid-svg-icons/faMoneyBill1Wave";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons/faShoppingBasket";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {PurchaseHistoryUserService} from "./purchase-history-user.service";
@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent {
faEnvelope=faEnvelope;
faMoeny=faMoneyBill1Wave;
faBasket=faShoppingBasket;
  protected readonly faUserCircle = faUserCircle;

users = [{
  id:'',
  date:'',
  name:'',
  surname:'',
  email:'',
  address:'',
  receipt:'',
  totalPrice:''
  //users i merr nga purchase-history-user.service.ts
}
    ]
  constructor(private userService: PurchaseHistoryUserService) { }

  ngOnInit() {
    // Fetch user data when the component initializes
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log('Fetched users:', this.users);
    });
  }

  downloadJson(userId: String) { // Adjust the type to 'number' if IDs are integers
    // Find the user with the specified ID
    const user = this.users.find(u => u.id === userId);

    // Ensure the user is found before proceeding
    if (user) {
      const jsonString = JSON.stringify(user, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `user_data_${userId}.json`; // Include user ID in the file name

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error(`User with ID ${userId} not found`);
    }
  }



}

