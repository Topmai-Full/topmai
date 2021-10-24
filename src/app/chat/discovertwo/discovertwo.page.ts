import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AlbumModelPage } from '../album-model/album-model.page';
import { ModalController } from '@ionic/angular';
import { PrivacidadPage } from '../privacidad/privacidad.page';
@Component({
  selector: 'app-discovertwo',
  templateUrl: './discovertwo.page.html',
  styleUrls: ['./discovertwo.page.scss'],
})
export class DiscovertwoPage implements OnInit {

  showHeader; items;
  constructor(private location: Location, public modalController: ModalController) {
    this.showHeader=false;
    this.items=[
      {
        name: 'Dany Trejo',
        date:'09/2021',
        profilePic:'assets/chat/contacts/2.png',
        images:['assets/chat/contacts/2.png','assets/chat/contacts/2.png','assets/chat/contacts/2.png','assets/chat/contacts/2.png']
      },
      {
        name: 'Dany Trejo',
        date:'08/2021',
        profilePic:'assets/chat/contacts/2.png',
        images:['assets/chat/contacts/2.png','assets/chat/contacts/2.png']
      },
      {
        name: 'Dany Trejo',
        date:'07/2021',
        profilePic:'assets/chat/contacts/2.png',
        images:['assets/chat/contacts/2.png']
      },
      {
        name: 'Dany Trejo',
        date:'05/2021',
        profilePic:'assets/chat/contacts/2.png',
        images:['assets/chat/contacts/2.png','assets/chat/contacts/2.png','assets/chat/contacts/2.png',]
      }
    ];
  }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }
  onScroll(e) {
      console.log(e.detail.currentY);
      if(e.detail.currentY>200){
        this.showHeader=true;
      }else{
        this.showHeader=false;
      }
    };

    async AlbumModal() {
      const modal = await this.modalController.create({
        component: PrivacidadPage,
        cssClass: 'my-custom-class-privacidad'
      });
      return await modal.present();
    }
}
