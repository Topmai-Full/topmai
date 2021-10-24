import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import {ModalController} from '@ionic/angular';

import { PaymentDialogPage } from '../one-chat/payment-dialog/payment-dialog.page';
import { WithdrawalsDialogPage } from './withdrawals-dialog/withdrawals-dialog.page';
import { RechargeDialogPage } from './recharge-dialog/recharge-dialog.page';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  constructor(private location: Location,public modalController: ModalController) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: PaymentDialogPage,
    });
    return await modal.present();
  }
  async withdrawals() {
    const modal = await this.modalController.create({
      component: WithdrawalsDialogPage,
    });
    return await modal.present();
  }
  async recharges() {
    const modal = await this.modalController.create({
      component: RechargeDialogPage,
    });
    return await modal.present();
  }
}
