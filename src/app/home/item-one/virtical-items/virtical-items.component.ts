import { Component, OnInit } from '@angular/core';





import {SellerProfileModelPage} from '../../seller-profile-model/seller-profile-model.page';



import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-virtical-items',
  templateUrl: './virtical-items.component.html',
  styleUrls: ['./virtical-items.component.scss'],
})
export class VirticalItemsComponent implements OnInit {
  itemsVirticale;
  constructor(public modalController: ModalController) {
    this.itemsVirticale=[
      {
        title: 'Refrigerador Qianku this is Qianku ',
        img:'assets/homePage/items/virtical/coche5.png',
        profile:'assets/homePage/items/virtical/profile.png',
        price: '$500',
        priceTag: '$700',
        upPriceTag: 'Rembolso Rápido',
        envio: 'Envío Gratis',
        ventas: '300+ ventas'
      },
      {
        title: 'Refrigerador Qianku',
        img:'assets/homePage/items/virtical/4.jpg',
        profile:'assets/homePage/items/virtical/profile.png',
        price: '$3000',
        priceTag: '$500',
        upPriceTag: 'Rembolso Rápido',
        envio: 'Envío Gratis',
        ventas: '300+ ventas'
      },
      {
        title: 'Refrigerador Qianku',
        img:'assets/homePage/items/virtical/5.jpg',
        profile:'assets/homePage/items/virtical/profile.png',
        price: '$900',
        priceTag: '$1200',
        upPriceTag: 'Rembolso Rápido',
        envio: 'Envío Gratis',
        ventas: '300+ ventas'
      }
    ];
  }

  ngOnInit() {


    //  this.openSellerProfileModel();

    //  this.openSellerProfileModel();


 

  }

   async openSellerProfileModel() {
     const modal = await this.modalController.create({
       component: SellerProfileModelPage,
     });
     return await modal.present();
   }

}
