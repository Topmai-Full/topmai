/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { OrderService } from '../../services/order.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-order-state',
  templateUrl: './order-state.page.html',
  styleUrls: ['./order-state.page.scss'],
})
export class OrderStatePage implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  orders: any;
  baseUrl = environment.baseUrl;
  loader = false;
  constructor(
    public modalController: ModalController,
    private orderSrv: OrderService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.loader = true;
    this.loadingController.create({
      message: 'Loading...'
    }).then((response) => {
      response.present();
      if (this.user) {
        this.orderSrv.notcompletedOrders(this.user._id).subscribe((resp: any) => {
          console.log(resp);
          this.orders = resp.orders;
          this.loader = false;
          response.dismiss();
        });
      }
    });
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
