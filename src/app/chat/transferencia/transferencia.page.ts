import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ModalController} from '@ionic/angular';
import {PopupModelPage} from './popup-model/popup-model.page';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.page.html',
  styleUrls: ['./transferencia.page.scss'],
})
export class TransferenciaPage implements OnInit {

  constructor(private location: Location, public modalController: ModalController) { }

  ngOnInit() {
    // this.presentModal();
  }

  goBack(){
    this.location.back();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: PopupModelPage,
    });
    return await modal.present();
  }
}
