import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";



@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent {




  category = [
    {
      name: 'Smartphones',
      types:[
        {name:'iphone'},
          {name:'samsung'}
      ]
    },
      {
          name: 'Smartwatches',
          types:[ {name:'apple'},
              {name:'chinese'},
              {name:'vietnam'}]
      },
      {
          name: 'Laptops',
          types:[ {name:'iphone'},
              {name:'samsung'}]
      },


  ]








}
