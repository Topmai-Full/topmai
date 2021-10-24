import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import {PlusPopupModelPage} from '../chat/plus-popup-model/plus-popup-model.page'
import { AlbumModelPage } from '../chat/album-model/album-model.page';

@Component({
  selector: 'app-chat-bottom-toolbar',
  templateUrl: './chat-bottom-toolbar.page.html',
  styleUrls: ['./chat-bottom-toolbar.page.scss'],
})
export class ChatBottomToolbarPage implements OnInit {

  constructor(private router: Router, public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PlusPopupModelPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async AlbumModal() {
    const modal = await this.modalController.create({
      component: AlbumModelPage,
      cssClass: 'my-custom-class-Album'
    });
    return await modal.present();
  }

  gotoHome(){
    this.router.navigate([`tabs/home`]);
  }

  gotoDiscover(){
    this.router.navigate([`discover`]);
  }

  gotoWallet(){
    this.router.navigate([`chat/wallet`]);
  }

}
