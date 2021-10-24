import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-twelve',
  templateUrl: './item-twelve.page.html',
  styleUrls: ['./item-twelve.page.scss'],
})
export class ItemTwelvePage implements OnInit {

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
      title:'Cámaras y accesorios',
      icon:'assets/homePage/categories/autos/1.png',
      },
      {
      title:'Autos',
      icon:'assets/homePage/categories/autos/2.png',
      },
      {
        title:'Celulares y Telefonia',
        icon:'assets/homePage/categories/autos/3.png',
      },
      {
        title:'Motos',
        icon:'assets/homePage/categories/autos/4.png',
      },
      {
        title:'Entrega de comida fresca',
        icon:'assets/homePage/categories/autos/5.png',
      }];
      this.categoriesRow2=[
        {
          title:'Importaciones de ultramar',
          icon:'assets/homePage/categories/autos/6.png',
        },
        {
          title:'Medicina salud',
          icon:'assets/homePage/categories/autos/7.png',
        },
        {
          title:'Servicios domésticos',
          icon:'assets/homePage/categories/autos/8.png',
        },
        {
          title:'Inactivo de segunda mano',
          icon:'assets/homePage/categories/autos/9.png',
        },
        {
          title:'Comida deliciosa',
          icon:'assets/homePage/categories/autos/10.png',
        }];
        this.categoriesRow3=[
          {
            title:'Importaciones de ultramar',
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
  gotoNextautos(){
    this.router.navigate([`tabs/nextautos`]);
  }


}
