/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ShippingService } from '../../services/shipping.service';

@Component({
  selector: 'app-confirmation-popover',
  templateUrl: './confirmation-popover.page.html',
  styleUrls: ['./confirmation-popover.page.scss'],
})
export class ConfirmationPopoverPage implements OnInit {
  @Input() routeId;
  constructor(
    public modalController: ModalController,
    public shippingSrv: ShippingService,
    private toastController: ToastController,
    private alertCtrl: AlertController
  ) { }

  action = false;
  shipping: any;

  formObj = {
    name: '',
    address: '',
    zip: '',
    user: '',
    phone: '',
    id: ''
  };


  ngOnInit() {
    this.single();
  }

  ionViewWillEnter() {
    this.single();
  }

  single() {
    if (this.routeId === 'new') {
      this.action = false;
    } else {
      this.action = true;
      this.shippingSrv.getById(this.routeId).subscribe(async (resp: any) => {
        console.log(resp);
        this.formObj.address = resp.data.address;
        this.formObj.name = resp.data.name;
        this.formObj.phone = resp.data.phone;
        this.formObj.zip = resp.data.zip;
        this.formObj.id = resp.data._id;
      });
    }
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async presentToast(title) {
    const toast = await this.toastController.create({
      message: title,
      duration: 2000
    });
    toast.present();
  }

  create() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.formObj.user = user._id;
    if (
      this.formObj.name === '' ||
      this.formObj.address === '' ||
      this.formObj.zip === ''
    ) {
      this.presentToast('Please fill all fields');
    } else {
      this.shippingSrv.create(this.formObj).subscribe(async (resp: any) => {
        if (resp.message === 'success') {
          this.presentToast('Shipping registerd successfully');
          const alert = await this.alertCtrl.create({
            header: 'Note',
            message: 'You want to go',
            buttons: [
              {
                text: 'HOME',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                  this.dismiss();
                }
              }, {
                text: 'ADD MORE SHIPPING',
                handler: async () => {
                  console.log('ok');
                  this.formObj.name = '';
                  this.formObj.address = '';
                  this.formObj.zip = '';
                }
              }
            ]
          });
          await alert.present();
        } else {
          console.log('something went wrong');
        }
      });
    }
  }

  update() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.formObj.user = user._id;
    if (
      this.formObj.name === '' ||
      this.formObj.address === '' ||
      this.formObj.zip === ''
    ) {
      this.presentToast('Please fill all fields');
    } else {
      this.shippingSrv.update(this.formObj).subscribe(async (resp: any) => {
        if (resp.message === 'success') {
          this.presentToast('Updated successfully');
          this.dismiss();
        } else {
          console.log('something went wrong');
        }
      });
    }
  }

}
