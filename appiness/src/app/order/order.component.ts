import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order_details;

  constructor(private router:Router) {
    this.order_details = this.router.getCurrentNavigation().extras.state
   }

  ngOnInit() {
  }

}
