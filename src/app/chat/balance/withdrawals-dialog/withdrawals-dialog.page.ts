import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-withdrawals-dialog',
  templateUrl: './withdrawals-dialog.page.html',
  styleUrls: ['./withdrawals-dialog.page.scss'],
})
export class WithdrawalsDialogPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
