import { Component, OnInit } from '@angular/core';

import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.css']
})
export class InsertCoinComponent implements OnInit {

  // sets variable coinBalance at initial value 0
  // we will add to and subtract from this in the vending machine
  coinBalance : number = 0;

  constructor(
    // uses all of the BalanceService functions and stores them in balanceService
    private balanceService : BalanceService
  ) { }

  ngOnInit() {
    // this function is for listeners
    // using the onBalanceUpdated function from balanceService and takes in a callback function that updates coinBalance
    this.balanceService.onBalanceUpdated((balance) => {
      console.log(balance);
      this.coinBalance = balance;
    });
  }

  addBalance(amount : number) {
    console.log(amount);
    // this is used in the html form and the amount is passed in from the buttons clicked and their respective values
    this.balanceService.addBalance(amount);
  }

}
