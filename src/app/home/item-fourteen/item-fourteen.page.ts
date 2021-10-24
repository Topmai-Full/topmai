import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-fourteen',
  templateUrl: './item-fourteen.page.html',
  styleUrls: ['./item-fourteen.page.scss'],
})
export class ItemFourteenPage implements OnInit {

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
      title:'Sujetador',
      icon:'assets/homePage/categories/ropamujer/sujetador.png',
      },
      {
      title:'Vestir',
      icon:'assets/homePage/categories/ropamujer/vestidos2.png',
      },
      {
        title:'Pantalones',
        icon:'assets/homePage/categories/ropamujer/pantalones.png',
      },
      {
        title:'Falda',
        icon:'assets/homePage/categories/ropamujer/faldas.png',
      },
      {
        title:'Chamarra',
        icon:'assets/homePage/categories/ropamujer/chamarra1.png',
      }];
      this.categoriesRow2=[
        {
          title:'Viajero',
          icon:'assets/homePage/categories/ropamujer/chamarra2.png',
        },
        {
          title:'Sueter',
          icon:'assets/homePage/categories/ropamujer/sueter.png',
        },
        {
          title:'Playeras',
          icon:'assets/homePage/categories/ropamujer/playera.png',
        },
        {
          title:'Encaje',
          icon:'assets/homePage/categories/ropamujer/encaje.png',
        },
        {
          title:'Vestido',
          icon:'assets/homePage/categories/ropamujer/vestido.png',
        }];
        this.categoriesRow3=[
          {
            title:'Importaciones de ultramar',
            icon:'assets/homePage/categories/ropamujer/super.svg',
          },
          {
            title:'Medicina salud',
            icon:'assets/homePage/categories/ropamujer/tenis.svg',
          },
          {
            title:'Servicios domésticos',
            icon:'assets/homePage/categories/ropamujer/audio.svg',
          },
          {
            title:'Inactivo de segunda mano',
            icon:'assets/homePage/categories/ropamujer/camara.svg',
          },
          {
            title:'Comida deliciosa',
            icon:'assets/homePage/categories/ropamujer/carro.svg',
          }];
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
