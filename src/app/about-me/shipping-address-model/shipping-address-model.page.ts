/* eslint-disable no-underscore-dangle */
import { ShippingService } from './../../services/shipping.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ConfirmationPopoverPage } from '../confirmation-popover/confirmation-popover.page';

@Component({
  selector: 'app-shipping-address-model',
  templateUrl: './shipping-address-model.page.html',
  styleUrls: ['./shipping-address-model.page.scss'],
})
export class ShippingAddressModelPage implements OnInit {

  shippings: any;
  user: any;
  loader = false;
  constructor(
    public modalController: ModalController,
    private shiipingSrv: ShippingService,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.loader = true;
    this.loadingController.create({
      message: 'Loading...'
    }).then((response) => {
      response.present();

      this.user = JSON.parse(localStorage.getItem('user'));
      this.shiipingSrv.getAllByuser(this.user._id).subscribe((resp: any) => {
        this.shippings = resp.data;
        this.loader = false;
        response.dismiss();
      });
    });
  }

  async presentToast(title) {
    const toast = await this.toastController.create({
      message: title,
      duration: 2000
    });
    toast.present();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async presentModal(id) {
    const modal = await this.modalController.create({
      component: ConfirmationPopoverPage,
      cssClass: 'my-model-class',
      componentProps: {
        routeId: id
      }
    });
    return await modal.present();
  }

  ionViewWillEnter() {
    this.getAll();
  }

  async delete(id) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure',
      message: 'You want to delete it',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.dismiss();
          }
        }, {
          text: 'Yes',
          handler: async () => {
            this.shiipingSrv.delete(id).subscribe((resp: any) => {
              if (resp.message === 'success') {
                this.presentToast('Delete successfully');
                this.getAll();
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
