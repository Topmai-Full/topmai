import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ModalController} from '@ionic/angular';

import {PaymentDialogPage} from '../payment-dialog/payment-dialog.page';
@Component({
  selector: 'app-modal-tranfer',
  templateUrl: './modal-tranfer.page.html',
  styleUrls: ['./modal-tranfer.page.scss'],
})
export class ModalTranferPage implements OnInit {

  constructor(private location: Location, public modalController: ModalController) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  close() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: PaymentDialogPage,
    });
    return await modal.present();
  }
}

