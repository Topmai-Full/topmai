import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-eighteen',
  templateUrl: './item-eighteen.page.html',
  styleUrls: ['./item-eighteen.page.scss'],
})
export class ItemEighteenPage implements OnInit {
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
      title:'Fundas',
      icon:'assets/homePage/categories/Casatextiles/fundas.png',
      },
      {
      title:'edredón',
      icon:'assets/homePage/categories/Casatextiles/edredon.png',
      },
      {
        title:'Mosquitero',
        icon:'assets/homePage/categories/Casatextiles/mosquitero.png',
      },
      {
        title:'Almohada',
        icon:'assets/homePage/categories/Casatextiles/almohada.png',
      },
      {
        title:'Alfombra',
        icon:'assets/homePage/categories/Casatextiles/alfombra.png',
      }];
      this.categoriesRow2=[
        {
          title:'Cojín',
          icon:'assets/homePage/categories/Casatextiles/cojin.png',
        },
        {
          title:'Cortina',
          icon:'assets/homePage/categories/Casatextiles/cortinas.png',
        },
        {
          title:'Toalla',
          icon:'assets/homePage/categories/Casatextiles/toalla.png',
        },
        {
          title:'Mantel',
          icon:'assets/homePage/categories/Casatextiles/mantel.png',
        },
        {
          title:'Decoración',
          icon:'assets/homePage/categories/Casatextiles/Decoraciones.png',
        }];
        this.categoriesRow3=[
          {
            title:'Sombrilla',
            icon:'assets/homePage/categories/Casatextiles/sombrilla.png',
          },
          {
            title:'Sábanas',
            icon:'assets/homePage/categories/Casatextiles/sabanas.png',
          },
          {
            title:'Otros...',
            icon:'assets/homePage/categories/Casatextiles/sabanas.png',
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
