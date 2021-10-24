import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ShippingAddressModelPage } from '../../app/about-me/shipping-address-model/shipping-address-model.page';
import { ProfileModelPage } from './profile-model/profile-model.page';
import { Router } from '@angular/router';
import { OrderStatePage } from './order-state/order-state.page';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit {
  user: any;
  constructor(
    public modalController: ModalController,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    //this.openOrderStateModal();
  }

  goMyOrders() {
    this.router.navigate([`my-orders`]);
  }

  goMyFavorites() {
    this.router.navigate([`favorites`]);
  }
  gotoEnvios() {
    this.router.navigate([`order-wizard`]);
  }

  gotoSesion() {
    this.router.navigate([`presentation`]);
  }

  ionViewWillEnter() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure',
      message: 'You want to logout',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel');
          }
        }, {
          text: 'Okay',
          handler: async () => {
            this.user = JSON.parse(localStorage.getItem('user'));
            localStorage.clear();
          }
        }
      ]
    });
    await alert.present();
  }

  async openProfileModal() {
    const modal = await this.modalController.create({
      component: ProfileModelPage,
    });
    return await modal.present();
  }

  async openOrderStateModal() {
    const modal = await this.modalController.create({
      component: OrderStatePage,
    });
    return await modal.present();
  }

  async shippingModal() {
    const modal = await this.modalController.create({
      component: ShippingAddressModelPage,
    });
    return await modal.present();
  }


}
