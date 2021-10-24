import { Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { ModalPrecioAutoPage } from '../modal-precio-auto/modal-precio-auto.page';


@Component({
  selector: 'app-nextautos',
  templateUrl: './nextautos.page.html',
  styleUrls: ['./nextautos.page.scss'],
})
export class NextautosPage implements OnInit {

  @ViewChild(IonSlides) ionSlides: IonSlides
  slideOpts: any = {};
  slides: any[] = [];
  activeTab = 0;
  activities: any[] = [];
  topSliderItems: Array<any>;
  selectedCategory;
  items: Array<any>;
  constructor(private location: Location,private router: Router,  public modalController: ModalController) { 
    this.selectedCategory=0;
    this.topSliderItems=[
      {
        title:'Precio',
      },
      {
        title:'Marca y Modelo',
      },
      {
        title:'Año',
      },
      {
        title:'Km',
      }
      ,
      {
        title:'Ubicación',
      }
      
     
    ];
    
    this.items=[{
      id:1,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/coche1.jpg',
      people:'assets/homePage/item-two/g1.png',
    },{
      id:2,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/coche2.jpg',
      people:'assets/homePage/item-two/g3.png',
    },{
      id:3,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/coche3.jpg',
    },{
      id:4,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/coche4.jpg',
      people:'assets/homePage/item-two/g4.png',
    },{
      id:5,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/coche5.png',
    },{
      id:6,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/coche6.jpg',
    }];
  }
  selectCategory(index){
    this.selectedCategory=index;
  }
  getClass(i){
    if (i===0){
      {return 'left-col first-row';}
    }
    else if (i===1){
      {return 'right-col first-row';}
    }
    else if (i%2 === 0)
      {return 'left-col';}
    else
      {return 'right-col';}
  }

 
  ngOnInit() {
     this.slides = [
       {id: 1, name: 'All activity'},
       {id: 2, name: 'Likes', notifications: 32},
       {id: 3, name: 'Comments', notifications: 13},
       {id: 4, name: 'Mentions'},
     ];
     this.slideOpts = {    
       slidesPerView: this.checkScreen(),
       slideShadows: true
     };
  }
   checkScreen() {
     let innerWidth = window.innerWidth;
     console.log(innerWidth);
     switch (true) {
       case 340 > innerWidth:
         return this.checkLength(3.6);
       case 340 <= innerWidth && innerWidth <= 400:
         return this.checkLength(3.6);
       case 401 <= innerWidth && innerWidth <= 700:
         return this.checkLength(4.6);
       case 701 <= innerWidth && innerWidth <= 900:
         return this.checkLength(5.6);
       case 901 <= innerWidth:
         return this.checkLength(6.6);
     }
   }
   checkLength(val) {
     let length = this.slides.length;
     return val < length ? val : length;
   }
  gotoItem(id){
    this.router.navigate([`tabs/home/item-two/${id}`]);
  }
  goBack(){
    this.location.back();
  }


  async AutoPrecio() {
    const modal = await this.modalController.create({
      component: ModalPrecioAutoPage,
      cssClass: 'my-custom-class-AutoPrecio'
    });
    return await modal.present();
  }
  
}
