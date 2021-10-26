/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { environment } from '../../environments/environment';
import { ToastController } from '@ionic/angular';
import { ShippingService } from '../services/shipping.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  cartItems: any;
  shippings: any;
  baseUrl = environment.baseUrl;
  user = JSON.parse(localStorage.getItem('user'));
  totalAmount = 0;
  shippingCharges = 20;
  loader = false;
  formOj = {
    shipping: '',
    user: '',
    products: [],
    totalAmount: 0,
    shippingtax: 20
  };

  constructor(
    private router: Router,
    private prodSrv: ProductService,
    public toastController: ToastController,
    private shiipingSrv: ShippingService,
    private orderSrv: OrderService,
  ) { }

  ionViewWillEnter() {
    this.get();
  }

  ngOnInit() {
    this.get();
  }

  get() {
    this.totalAmount = 0;
    const ar = JSON.parse(localStorage.getItem('products'));
    this.prodSrv.findCartProducts(ar).subscribe((resp: any) => {
      this.loader = true;
      this.cartItems = resp.data;
      for (let i = 0; i < this.cartItems.length; i++) {
        this.totalAmount += this.cartItems[i].product.price * this.cartItems[i].qty;
      }
    });

    const user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
      this.shiipingSrv.getAllByuser(user._id).subscribe((resp: any) => {
        this.shippings = resp.data;
      });
    }
  }

  async presentToast(title) {
    const toast = await this.toastController.create({
      message: title,
      duration: 3000
    });
    toast.present();
  }

  goBack() {
    this.router.navigate([`tabs/about-me`]);
  }

  minus(index) {
    this.totalAmount = 0;
    if (this.cartItems[index].qty > 1) {
      this.cartItems[index].qty -= 1;
    } else {
      this.presentToast('Minimum 1 quantity required');
    }
    for (let i = 0; i < this.cartItems.length; i++) {
      this.totalAmount += this.cartItems[i].product.price * this.cartItems[i].qty;
    }
  }

  plus(index) {
    this.totalAmount = 0;
    this.cartItems[index].qty += 1;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.totalAmount += this.cartItems[i].product.price * this.cartItems[i].qty;
    }
  }

  Order() {
    this.formOj.totalAmount = this.totalAmount;
    this.formOj.user = this.user._id;
    this.formOj.products = this.cartItems;
    if (this.formOj.shipping === '') {
      this.presentToast('Please select Shipping Address');
    } else {
      this.orderSrv.create(this.formOj).subscribe((resp: any) => {
        if (resp.message === 'success') {
          this.presentToast('Order Registered successfully');
          localStorage.removeItem('products');
          localStorage.removeItem('selectedProduct');
          this.router.navigate(['/tabs/about-me']);
        } else {
          console.log('something went wrong');
        }
      });
    }
  }

}
