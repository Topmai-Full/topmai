import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-seventeen',
  templateUrl: './item-seventeen.page.html',
  styleUrls: ['./item-seventeen.page.scss'],
})
export class ItemSeventeenPage implements OnInit {

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
      title:'Subasta',
      icon:'assets/homePage/categories/accesorios/subasta.png',
      },
      {
      title:'Joyas',
      icon:'assets/homePage/categories/accesorios/joyas.png',
      },
      {
        title:'Perlado',
        icon:'assets/homePage/categories/accesorios/perla.png',
      },
      {
        title:'Oro',
        icon:'assets/homePage/categories/accesorios/oro.png',
      },
      {
        title:'Reloj',
        icon:'assets/homePage/categories/accesorios/reloj.png',
      }];
      this.categoriesRow2=[
        {
          title:'Brazalete',
          icon:'assets/homePage/categories/accesorios/brazalete.png',
        },
        {
          title:'Arete',
          icon:'assets/homePage/categories/accesorios/aretes.png',
        },
        {
          title:'Collar',
          icon:'assets/homePage/categories/accesorios/collar.png',
        },
        {
          title:'Lentes',
          icon:'assets/homePage/categories/accesorios/lentes.png',
        },
        {
          title:'Anillo',
          icon:'assets/homePage/categories/accesorios/anillo.png',
        }];
        this.categoriesRow3=[
          {
            title:'Broches',
            icon:'assets/homePage/categories/accesorios/broches.png',
          },
          {
            title:'Decoración',
            icon:'assets/homePage/categories/accesorios/decoracion.png',
          },
          {
            title:'Pinturas',
            icon:'assets/homePage/categories/accesorios/pintura.png',
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
