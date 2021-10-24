import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.page.html',
  styleUrls: ['./payment-dialog.page.scss'],
})
export class PaymentDialogPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
