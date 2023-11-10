import {booleanAttribute, Component} from '@angular/core';
import {UserService} from "./user.service";
import {PurchaseHistoryUserService} from "../purchase-history/purchase-history-user.service";

@Component({
  selector: 'app-settings',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  users=[{
    id:'',
    date_of_register:'',
    name:'',
    surname:'',
    email:'',
    address:'',
    isAdmin:null
  }]
  constructor(private userService: PurchaseHistoryUserService) { }

  ngOnInit() {
    // Fetch user data when the component initializes
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log('Fetched users:', this.users);
    });
  }

  // downloadJson(userId: String) { // Adjust the type to 'number' if IDs are integers
  //   // Find the user with the specified ID
  //   const user = this.users.find(u => u.id === userId);
  //
  //   // Ensure the user is found before proceeding
  //   if (user) {
  //     const jsonString = JSON.stringify(user, null, 2);
  //     const blob = new Blob([jsonString], { type: 'application/json' });
  //
  //     const link = document.createElement('a');
  //     link.href = window.URL.createObjectURL(blob);
  //     link.download = `user_data_${userId}.json`; // Include user ID in the file name
  //
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } else {
  //     console.error(`User with ID ${userId} not found`);
  //   }
  // }
}
