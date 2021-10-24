import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-five',
  templateUrl: './item-five.page.html',
  styleUrls: ['./item-five.page.scss'],
})
export class ItemFivePage implements OnInit {

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
      title:'Microondas',
      icon:'assets/homePage/categories/electrodomesticos/microondas.png',
      },
      {
      title:'Cafeteras',
      icon:'assets/homePage/categories/electrodomesticos/cafetera.png',
      },
      {
        title:'Tv',
        icon:'assets/homePage/categories/electrodomesticos/tv.png',
      },
      {
        title:'Personal',
        icon:'assets/homePage/categories/electrodomesticos/personal.png',
      },
      {
        title:'Domésticos',
        icon:'assets/homePage/categories/electrodomesticos/ventilador.png',
      }];
      this.categoriesRow2=[
        {
          title:'Cocina',
          icon:'assets/homePage/categories/electrodomesticos/olla.png',
        },
        {
          title:'Calentador',
          icon:'assets/homePage/categories/electrodomesticos/calentador.png',
        },
        {
          title:'Refrigerador',
          icon:'assets/homePage/categories/electrodomesticos/refri.png',
        },
        {
          title:'Clima',
          icon:'assets/homePage/categories/electrodomesticos/split.png',
        },
        {
          title:'Lavadora',
          icon:'assets/homePage/categories/electrodomesticos/lavadora.png',
        }];
        this.categoriesRow3=[
          {
            title:'Lavadora',
            icon:'assets/homePage/categories/super.svg',
          },
          {
            title:'Medicina salud',
            icon:'assets/homePage/categories/tenis.svg',
          },
          {
            title:'Servicios domésticos',
            icon:'assets/homePage/categories/audio.svg',
          },
          {
            title:'Inactivo de segunda mano',
            icon:'assets/homePage/categories/camara.svg',
          },
          {
            title:'Comida deliciosa',
            icon:'assets/homePage/categories/carro.svg',
          }
        ];
          this.categoriesRow4=[
            {
              title:'Importaciones de ultramar',
              icon:'assets/homePage/categories/celular.svg',
            },
            {
              title:'Medicina salud',
              icon:'assets/homePage/categories/game.svg',
            },
            {
              title:'Servicios domésticos',
              icon:'assets/homePage/categories/labial.svg',
            },
            {
              title:'Inactivo de segunda mano',
              icon:'assets/homePage/categories/laptop.svg',
            },
            {
              title:'Comida deliciosa',
              icon:'assets/homePage/categories/mueble.svg',
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
