import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-popup-model',
  templateUrl: './popup-model.page.html',
  styleUrls: ['./popup-model.page.scss'],
})
export class PopupModelPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
