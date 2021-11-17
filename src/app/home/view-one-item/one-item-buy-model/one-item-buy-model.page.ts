/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ReciptConfirmationModelPage } from '../recipt-confirmation-model/recipt-confirmation-model.page';
import { ProductService } from '../../../services/product.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-one-item-buy-model',
  templateUrl: './one-item-buy-model.page.html',
  styleUrls: ['./one-item-buy-model.page.scss'],
})
export class OneItemBuyModelPage implements OnInit {
  loader = false;
  modelId: any;
  product: any;
  baseUrl = environment.baseUrl;
  productVarients: any;
  dummyImage = 'https://vendy.s3.me-south-1.amazonaws.com/sample-logo.png';
  products = [];
  formOj = {
    qty: 1,
    pvov: '',
    productId: ''
  };
  filterProducts: any;

  constructor(
    public modalController: ModalController,
    private prodSrv: ProductService,
    private alertCtrl: AlertController,
    public toastController: ToastController,
    private loadingController: LoadingController
  ) {
  }

  ngOnInit() {

    this.loader = true;
    this.loadingController.create({
      message: 'Loading...'
    }).then((response) => {
      response.present();

      this.products = JSON.parse(localStorage.getItem('products'));
      this.modelId = localStorage.getItem('selectedProduct');
      this.formOj.productId = this.modelId;
      this.prodSrv.getById(this.modelId).subscribe((resp: any) => {
        this.product = resp.product;
        this.productVarients = resp.pvov;
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
  plus() {
    this.formOj.qty += 1;
  }
  minus() {
    if (this.formOj.qty > 1) {
      this.formOj.qty -= 1;
    } else {
      this.presentToast('Minimum 1 quantity required');
    }
  }
  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async presentModal() {
    if (this.products === null) {
      this.products = [];
    }
    let local = JSON.parse(localStorage.getItem('products'));
    if (local === null) {
      local = [];
    }
    if (this.productVarients.length > 0) {
      if (this.formOj.pvov === '') {
        this.presentToast('Please select varient');
      } else {
        if (local.length < 1) {
          this.products.push(this.formOj);
          localStorage.setItem('products', JSON.stringify(this.products));
          this.presentToast('Successfully Added');
        } else {
          if (this.formOj.pvov !== '') {
            let check = false;
            for (let i = 0; i < local.length; i++) {
              if (local[i].productId === this.formOj.productId && local[i].pvov === this.formOj.pvov) {
                check = true;
              }
            }
            if (check) {
              this.presentToast('Already exist');
            } else {
              this.products.push(this.formOj);
              this.presentToast('Successfully Added');
              localStorage.setItem('products', JSON.stringify(this.products));
              this.dismiss();
            }
          }
        }
      }
    } else {
      let check = false;
      for (let i = 0; i < local.length; i++) {
        if (local[i].productId === this.formOj.productId) {
          check = true;
        }
      }
      if (check) {
        this.presentToast('Already exist');
      } else {
        this.products.push(this.formOj);
        this.presentToast('Successfully Added');
        localStorage.setItem('products', JSON.stringify(this.products));
        this.dismiss();
      }
    }
  }

  extractNameFromJson(obj) {
    // obj = JSON.parse(obj);
    obj = JSON.stringify(obj);
    return JSON.parse(obj);
  }
}
