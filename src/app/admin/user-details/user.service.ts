// purchase-history-user.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): Observable<any[]> {
    // Simulating an API call, replace this with your actual API endpoint
    return of([
      {
        id: "1",
        date_of_register: "12/12/1222",
        name: "emri",
        surname: "mbiemri",
        email: "asdasd@gmail.com",
        address: "adresa",
        isAdmin:true
      },
      {
        id: "2",
        date_of_register: "12/12/1222",
        name: "emri 1",
        surname: "mbiemri 1",
        email: "asdasd@gmail.com1",
        address: "adresa",
        isAdmin: false
      },
      {
        id: "3",
        date_of_register: "12/12/1222",
        name: "emri 2",
        surname: "mbiemri 2",
        email: "asdasd@gmail.com2",
        address: "adresa",
        isAdmin: false
      }
      // Add more users if needed
    ]);
  }
}
