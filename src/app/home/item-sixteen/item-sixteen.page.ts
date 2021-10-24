import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-sixteen',
  templateUrl: './item-sixteen.page.html',
  styleUrls: ['./item-sixteen.page.scss'],
})
export class ItemSixteenPage implements OnInit {

  items: Array<any>;
  categoriesRow1: Array<any>;
  categoriesRow2: Array<any>;
  categoriesRow3: Array<any>;
  categoriesRow4: Array<any>;
  constructor(private router: Router) {
    this.items=[{
      id:1,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/1.png',
      people:'assets/homePage/item-two/g1.png',
    },{
      id:2,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/2.png',
      people:'assets/homePage/item-two/g3.png',
    },{
      id:3,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/3.png',
    },{
      id:4,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/4.png',
      people:'assets/homePage/item-two/g4.png',
    },{
      id:5,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/1.png',
    },{
      id:6,
      title: 'Refrigerador Qianku',
      subTitle:'SubTitle',
      price: '€000',
      priceNote: '€30',
      img:'assets/homePage/item-two/2.png',
    }];
    this.categoriesRow1=[
      {
      title:'Hombre',
      icon:'assets/homePage/categories/ropaInterior/hombre.png',
      },
      {
      title:'Calcetín',
      icon:'assets/homePage/categories/ropaInterior/calcetin.png',
      },
      {
        title:'Sujetadores',
        icon:'assets/homePage/categories/ropaInterior/sujetador.png',
      },
      {
        title:'Pijamas',
        icon:'assets/homePage/categories/ropaInterior/pijama.png',
      },
      {
        title:'Cintura',
        icon:'assets/homePage/categories/ropaInterior/cintura.png',
      }];
      this.categoriesRow2=[
        {
          title:'Mujer',
          icon:'assets/homePage/categories/ropaInterior/mujer.png',
        },
        {
          title:'Fundas',
          icon:'assets/homePage/categories/ropaInterior/fundas.png',
        },
        {
          title:'Sport',
          icon:'assets/homePage/categories/ropaInterior/sport.png',
        },
        {
          title:'Térmica',
          icon:'assets/homePage/categories/ropaInterior/termica.png',
        },
        {
          title:'Bufanda',
          icon:'assets/homePage/categories/ropaInterior/bufanda.png',
        }];
        this.categoriesRow3=[
          {
            title:'Sombrero',
            icon:'assets/homePage/categories/ropaInterior/sombrero.png',
          },
          {
            title:'',
            icon:'',
          },
          {
            title:'',
            icon:'',
          },
          {
            title:'',
            icon:'',
          },
          {
            title:'',
            icon:'',
          }];
          this.categoriesRow4=[
            {
              title:'',
              icon:'',
            },
            {
              title:'',
              icon:'',
            },
            {
              title:'',
              icon:'',
            },
            {
              title:'',
              icon:'',
            },
            {
              title:'',
              icon:'',
            }];
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
  }
  gotoItem(id){
    this.router.navigate([`tabs/home/item-two/${id}`]);
  }

}
