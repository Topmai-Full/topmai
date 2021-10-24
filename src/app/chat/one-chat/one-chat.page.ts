import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ModalController} from '@ionic/angular';
import {PaymentDialogPage} from './payment-dialog/payment-dialog.page';
import { ModalTranferPage } from './modal-tranfer/modal-tranfer.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-one-chat',
  templateUrl: './one-chat.page.html',
  styleUrls: ['./one-chat.page.scss'],
})
export class OneChatPage implements OnInit {
  mostrar = false;
  mostrarr = false;
  // seeMore;
  // seeMore2;
  constructor(private location: Location, public modalController: ModalController,private router: Router) {
    // this.seeMore='height: 40px';
    // this.seeMore2='height: 40px';
  }

  ngOnInit() {
    // this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PaymentDialogPage,
    });
    return await modal.present();
  }

  goBack(){
    this.location.back();
  }

  goToPage(url){
    this.router.navigate([url]);
  }

  // expand() {
  //   if(this.seeMore==='height: 40px'){
  //     this.seeMore='height: 235px';
  //   } else{
  //     this.seeMore='height: 40px';
  //   }
  // }
  // expand2() {
  //   if(this.seeMore2==='height: 40px'){
  //     this.seeMore2='height: 235px';
  //   } else{
  //     this.seeMore2='height: 40px';
  //   }
  // }

  async AutoPrecio() {
    const modal = await this.modalController.create({
      component: ModalTranferPage,
      cssClass: 'modal-chat-transferencia'
    });
    return await modal.present();
  }




}
