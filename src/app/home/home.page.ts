import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CategoryService } from '../services/category.service';
import { timer } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductService } from '../services/product.service';
import { ModalController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  topSliderItems: Array<any>;
  selectedCategory;
  cateId: any;
  mainCategories: Array<any>;
  productsByMaincategory: Array<any>;
  categoriesRow1: any;
  source = timer(0, 1000);
  baseUrl = environment.baseUrl;
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  clock: any;
  loader = false;
  items = [{
    id: 1,
    title: 'Refrigerador Qianku',
    subTitle: 'Envío Gratis',
    price: '$000',
    priceNote: '$30',
    rembolso: 'Rembolso Rápido',
    img: 'assets/homePage/item-two/1.png',
    people: 'assets/homePage/item-two/g1.png',
    ventas: '300+ ventas'
  }, {
    id: 2,
    title: 'Refrigerador Qianku',
    subTitle: 'Envío Gratis',
    price: '$000',
    priceNote: '$30',
    rembolso: 'Rembolso Rápido',
    img: 'assets/homePage/item-two/2.png',
    people: 'assets/homePage/item-two/g3.png',
    ventas: '300+ ventas'
  }, {
    id: 3,
    title: 'Refrigerador Qianku',
    subTitle: 'Envío Gratis',
    price: '$000',
    priceNote: '$30',
    rembolso: 'Rembolso Rápido',
    img: 'assets/homePage/item-two/3.png',
    people: 'assets/homePage/item-two/g3.png',
    ventas: '300+ ventas'
  }, {
    id: 4,
    title: 'Refrigerador Qianku',
    subTitle: 'Envío Gratis',
    price: '$000',
    priceNote: '$30',
    rembolso: 'Rembolso Rápido',
    img: 'assets/homePage/item-two/4.png',
    people: 'assets/homePage/item-two/g4.png',
    ventas: '300+ ventas'
  }, {
    id: 5,
    title: 'Refrigerador Qianku',
    subTitle: 'Envío Gratis',
    price: '$000',
    priceNote: '$30',
    rembolso: 'Rembolso Rápido',
    img: 'assets/homePage/item-two/1.png',
    people: 'assets/homePage/item-two/g4.png',
    ventas: '300+ ventas'
  }, {
    id: 6,
    title: 'Refrigerador Qianku',
    subTitle: 'Envío Gratis',
    price: '$000',
    priceNote: '$30',
    rembolso: 'Rembolso Rápido',
    img: 'assets/homePage/item-two/2.png',
    people: 'assets/homePage/item-two/g4.png',
    ventas: '300+ ventas'
  }];
  constructor(
    private cateSrv: CategoryService,
    private prodSrv: ProductService,
    private router: Router,
    private loadingController: LoadingController
  ) {
    this.cateSrv.getAll().subscribe((resp: any) => {
      this.topSliderItems = resp.data;
      this.cateSrv.getAllSub(resp.data[0]._id).subscribe((resp: any) => {
        this.categoriesRow1 = resp.data;
      });
    });
  }

  ngOnInit() {
    this.selectedCategory = 0;
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date('01/01/' + (this.now.getFullYear() + 1) + ' 00:00');
      this.showDate();
    });
  }

  selectCategory(index, id) {
    this.loader = true;
    this.loadingController.create({
      message: 'Loading...'
    }).then((response) => {
      response.present();
      this.selectedCategory = index;
      this.cateSrv.getAllSub(id).subscribe((resp: any) => {
        this.categoriesRow1 = resp.data;
        this.prodSrv.getAllByParentcategory(id).subscribe((resp: any) => {
          this.productsByMaincategory = resp.data;
          this.loader = false;
          response.dismiss();
        });
      });
    });



  }

  childcategory(item) {
    console.log(item._id);
    this.prodSrv.getAllBychildcategory(item._id).subscribe((resp: any) => {
      console.log(resp);
      this.productsByMaincategory = resp.data;
    });
  }

  showDate() {
    const distance = this.end - this.now;
    this.day = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    this.minutes = Math.floor((distance % this._hour) / this._minute);
    this.seconds = Math.floor((distance % this._minute) / this._second);
  }

  getClass(i) {
    if (i === 0) {
      { return 'left-col first-row'; }
    }
    else if (i === 1) {
      { return 'right-col first-row'; }
    }
    else if (i % 2 === 0) { return 'left-col'; }
    else { return 'right-col'; }
  }

  gotoItem(id) {
    this.router.navigate([`/home/item-two/${id}`]);
  }

}
