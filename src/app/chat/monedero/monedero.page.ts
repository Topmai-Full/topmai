import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import { PopupModelPage } from '../transferencia/popup-model/popup-model.page';


@Component({
  selector: 'app-monedero',
  templateUrl: './monedero.page.html',
  styleUrls: ['./monedero.page.scss'],
})
export class MonederoPage implements OnInit {

  constructor(private router: Router,private location: Location, public modalController: ModalController) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  gotoBalance(){
    this.router.navigate([`balance`]);
  }

  gotoAddcard(){
    this.router.navigate([`my-cards`]);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PopupModelPage,
    });
    return await modal.present();
  }

}
