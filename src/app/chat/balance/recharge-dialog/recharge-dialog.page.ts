import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-recharge-dialog',
  templateUrl: './recharge-dialog.page.html',
  styleUrls: ['./recharge-dialog.page.scss'],
})
export class RechargeDialogPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
