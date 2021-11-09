/* eslint-disable no-underscore-dangle */
import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  orders: any;
  user = JSON.parse(localStorage.getItem('user'));
  constructor(
    private location: Location,
    private ordSrv: OrderService
    ) { }

  ngOnInit() {
    this.ordSrv.getAll(this.user._id).subscribe((resp: any) => {
      this.orders = resp.data;
    });
  }

  goBack(){
    this.location.back();
  }

}
