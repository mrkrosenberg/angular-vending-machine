import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  // creates variable items as an array of objects (the object brackets define what the array is expected to contain)
  items: {}[];

  constructor(
    private itemService : ItemService
  ) { }

  ngOnInit() {
    // uses the onItemsRetrieved function from itemService
    // to call the callback and save the items retrieved as this.items
    this.itemService.onItemsRetrieved((inventory) => {
      console.log(inventory);
      return this.items = inventory;
    });
  }

}
