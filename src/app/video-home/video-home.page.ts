import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.page.html',
  styleUrls: ['./video-home.page.scss'],
})
export class VideoHomePage implements OnInit {
  selectedCategory;topSliderItems;items;
  constructor() {
    this.selectedCategory=0;
    this.topSliderItems=[
      {
        title:'Todo',
      },
      {
        title:'gracioso',
      },
      {
        title:'Película',
      },
      {
        title:'Romántico',
      }
      ,
      {
        title:'Aaaaa',
      }
      ,
      {
        title:'Cbbb',
      },
      {
        title:'Dbbb',
      },
      {
        title:'Ebbb',
      }
    ];

    this.items=[
      {
        title: 'Refrigerador Qianku this is Qianku',
        img:'assets/homePage/items/virtical/8.jpg',
        profile:'assets/homePage/items/virtical/profile.png',
        price: '$100',
        priceTag: '$200',
        upPriceTag: 'Price Up description'
      },
      {
        title: 'Refrigerador Qianku',
        img:'assets/homePage/items/virtical/6.jpg',
        profile:'assets/homePage/items/virtical/profile.png',
        price: '$200',
        priceTag: '$300',
        upPriceTag: 'Price Up description'
      },
      {
        title: 'Refrigerador Qianku',
        img:'assets/homePage/items/virtical/9.jpg',
        profile:'assets/homePage/items/virtical/profile.png',
        price: '$300',
        priceTag: '$400',
        upPriceTag: 'Price Up description'
      },
      {
        title: 'Refrigerador Qianku',
        img:'assets/homePage/items/virtical/9.jpg',
        profile:'assets/homePage/items/virtical/profile.png',
        price: '$300',
        priceTag: '$400',
        upPriceTag: 'Price Up description'
      },
      {
        title: 'Refrigerador Qianku',
        img:'assets/homePage/items/virtical/9.jpg',
        profile:'assets/homePage/items/virtical/profile.png',
        price: '$300',
        priceTag: '$400',
        upPriceTag: 'Price Up description'
      }
    ];
  }

  ngOnInit() {
  }

  selectCategory(index){
    this.selectedCategory=index;
  }
}
