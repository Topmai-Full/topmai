import { environment } from './../../environments/environment.prod';
/* eslint-disable no-underscore-dangle */
import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  orders: any;
  baseUrl = environment.baseUrl;
  user = JSON.parse(localStorage.getItem('user'));
  constructor(
    private location: Location,
    private ordSrv: OrderService
  ) { }

  ngOnInit() {
    if (this.user) {
      this.ordSrv.getAll(this.user._id).subscribe((resp: any) => {
        this.orders = resp.orders;
        console.log(resp);
      });
    }
  }

  goBack() {
    this.location.back();
  }

}
