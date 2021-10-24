/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OneItemBuyModelPage } from './one-item-buy-model/one-item-buy-model.page';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-view-one-item',
  templateUrl: './view-one-item.page.html',
  styleUrls: ['./view-one-item.page.scss'],
})
export class ViewOneItemPage implements OnInit {
  @ViewChild('mySlider') slides: IonSlides;
  id;
  imageSet; innerWidth; selectedImagesSet; subSliderImages;
  ImageArray: any = [];
  product: any;
  routeId: any;
  baseUrl = environment.baseUrl;
  productImages = [];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    public modalController: ModalController,
    private prodSrv: ProductService,
    private _route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.subSliderImages = [
      'assets/homePage/single-items/1/sub-slider1.png',
      'assets/homePage/single-items/1/sub-slider1.png',
      'assets/homePage/single-items/1/sub-slider1.png',
    ];
    this.imageSet = [
      [{ path: 'assets/homePage/single-items/1/slider1.jpg' },
      { path: 'assets/homePage/single-items/1/slider1.jpg' },
      { path: 'assets/homePage/single-items/1/slider1.jpg' },],
      [{ path: 'assets/homePage/single-items/1/slider2.jpg' },
      { path: 'assets/homePage/single-items/1/slider2.jpg' },
      { path: 'assets/homePage/single-items/1/slider2.jpg' },],
      [{ path: 'assets/homePage/single-items/1/slider3.jpg' },
      { path: 'assets/homePage/single-items/1/slider3.jpg' },
      { path: 'assets/homePage/single-items/1/slider3.jpg' },]
    ];
    this.selectedImagesSet = this.imageSet[0];

    this.ImageArray = [
      { image: 'assets/homePage/single-items/1/slider3.jpg' },
      { image: 'assets/homePage/single-items/1/slider2.jpg' },
      { image: 'assets/homePage/single-items/1/slider1.jpg' }];
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.routeId = this._route.snapshot.params['id'];
    this.prodSrv.getById(this.routeId).subscribe((resp: any) => {
      console.log(resp);
      this.product = resp.product;
      this.productImages = resp.product.image;
    });
  }

  goBack() {
    this.location.back();
  }

  selectSubSlider(index) {
    this.selectedImagesSet = this.imageSet[index];
  }

  async presentModal() {
    localStorage.setItem('selectedProduct', this.routeId);
    const modal = await this.modalController.create({
      component: OneItemBuyModelPage,
    });
    return await modal.present();
  }


  slideOptsOne = {
    speed: 2000,
    loop: true,
    autoplay: true,
  };

}
