import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-recipt-confirmation-model',
  templateUrl: './recipt-confirmation-model.page.html',
  styleUrls: ['./recipt-confirmation-model.page.scss'],
})
export class ReciptConfirmationModelPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
