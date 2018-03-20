import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {

  itemCode = '';
  items: any[];
  selectedItem;

  constructor(
    private itemService : ItemService
  ) { }

  ngOnInit() {
    this.itemService.onItemsRetrieved((inventory) => {
      console.log(inventory);
      return this.items = inventory;
   });
   }

   itemSearch(){
     this.items.forEach((item) => {
      if(item.code === this.itemCode){
        this.itemService.setSelectedItem(item);
        alert(`${item.name} has been selected`);
      }
    });
   }

   dispenseItem(callback) {
     this.items.forEach((item) => {
      //  console.log(item);
       if(item.code === this.itemCode){
        //  console.log('this is really the ' + item.name);
         this.itemService.setSelectedItem(item);
        //  console.log('this is the ' + item.name);
         this.itemService.dispenseItem(callback => {
           console.log(item.remaining);
         });
       }
     });
   }

}
