// purchase-history-user.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseHistoryUserService {

  getUsers(): Observable<any[]> {
    // Simulating an API call, replace this with your actual API endpoint
    return of([
      {
        id: "1",
        date: "12/12/1222",
        name: "emri",
        surname: "mbiemri",
        email: "asdasd@gmail.com",
        address: "adresa",
        receipt: "asdasdasd.pdf",
        totalPrice: "1500"
      },
      {
        id: "2",
        date: "12/12/1222",
        name: "emri 1",
        surname: "mbiemri 1",
        email: "asdasd@gmail.com1",
        address: "adresa",
        receipt: "asdasdasd.pdf1",
        totalPrice: "130"
      },
      {
        id: "3",
        date: "12/12/1222",
        name: "emri 2",
        surname: "mbiemri 2",
        email: "asdasd@gmail.com2",
        address: "adresa",
        receipt: "asdasdasd.pdf2",
        totalPrice: "150"
      }
      // Add more users if needed
    ]);
  }
}
