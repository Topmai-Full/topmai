import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-seller-profile-model',
  templateUrl: './seller-profile-model.page.html',
  styleUrls: ['./seller-profile-model.page.scss'],
})
export class SellerProfileModelPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
