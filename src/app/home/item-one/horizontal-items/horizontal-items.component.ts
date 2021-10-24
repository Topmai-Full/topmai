import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-items',
  templateUrl: './horizontal-items.component.html',
  styleUrls: ['./horizontal-items.component.scss'],
})
export class HorizontalItemsComponent implements OnInit {
  itemsVirticale;
  constructor() {
    this.itemsVirticale=[
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
      }
    ];
  }

  ngOnInit() {}

}
