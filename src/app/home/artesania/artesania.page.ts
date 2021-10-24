import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artesania',
  templateUrl: './artesania.page.html',
  styleUrls: ['./artesania.page.scss'],
})
export class ArtesaniaPage implements OnInit {


  items: Array<any>;
  categoriesRow1: Array<any>;
  categoriesRow2: Array<any>;
  categoriesRow3: Array<any>;
  categoriesRow4: Array<any>;
  categoriesRow5: Array<any>;
  topSliderItems: Array<any>;
  constructor(private router: Router) {
    this.items=[{
      id:1,
      title: 'Refrigerador Qianku',
      subTitle:'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img:'assets/homePage/item-two/1.png',
      people:'assets/homePage/item-two/g1.png',
      ventas: '300+ ventas'
    },{
      id:2,
      title: 'Refrigerador Qianku',
      subTitle:'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img:'assets/homePage/item-two/2.png',
      people:'assets/homePage/item-two/g3.png',
      ventas: '300+ ventas'
    },{
      id:3,
      title: 'Refrigerador Qianku',
      subTitle:'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img:'assets/homePage/item-two/3.png',
      people:'assets/homePage/item-two/g3.png',
      ventas: '300+ ventas'
    },{
      id:4,
      title: 'Refrigerador Qianku',
      subTitle:'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img:'assets/homePage/item-two/4.png',
      people:'assets/homePage/item-two/g4.png',
      ventas: '300+ ventas'
    },{
      id:5,
      title: 'Refrigerador Qianku',
      subTitle:'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img:'assets/homePage/item-two/1.png',
      people:'assets/homePage/item-two/g4.png',
      ventas: '300+ ventas'
    },{
      id:6,
      title: 'Refrigerador Qianku',
      subTitle:'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img:'assets/homePage/item-two/2.png',
      people:'assets/homePage/item-two/g4.png',
      ventas: '300+ ventas'
    }];
    this.categoriesRow1=[
      {
      title:'Cerámica',
      icon:'assets/homePage/categories/artesania/ceramica.png',
      },
      {
      title:'Madera',
      icon:'assets/homePage/categories/artesania/madera.png',
      },
      {
        title:'Mármol',
        icon:'assets/homePage/categories/artesania/marmol.png',
      },
      {
        title:'Metal',
        icon:'assets/homePage/categories/artesania/metal.png',
      },
      {
        title:'Piel y Cuero',
        icon:'assets/homePage/categories/artesania/cueropiel.png',
      }];
      this.categoriesRow2=[
        {
          title:'Textil',
          icon:'assets/homePage/categories/artesania/textil.png',
        },
        {
          title:'Joyería',
          icon:'assets/homePage/categories/artesania/joyeria.png',
        },
        {
          title:'Instrumentos',
          icon:'assets/homePage/categories/artesania/instrumentos.png',
        },
        {
          title:'Otros...',
          icon:'assets/homePage/categories/artesania/otros.png',
        },
        {
          title:'',
          icon:'',
        }];
        this.categoriesRow3=[
          {
            title:'Call Center',
            icon:'assets/homePage/categories/super.svg',
          },
          {
            title:'Mercadotecnia',
            icon:'assets/homePage/categories/tenis.svg',
          },
          {
            title:'Leyes',
            icon:'assets/homePage/categories/audio.svg',
          },
          {
            title:'Sociales',
            icon:'assets/homePage/categories/camara.svg',
          },
          {
            title:'Educación',
            icon:'assets/homePage/categories/carro.svg',
          }];
          this.categoriesRow4=[
            {
              title:'Turismo',
              icon:'assets/homePage/categories/celular.svg',
            },
            {
              title:'Ingeniería',
              icon:'assets/homePage/categories/game.svg',
            },
            {
              title:'Construcción',
              icon:'assets/homePage/categories/labial.svg',
            },
            {
              title:'Ventas',
              icon:'assets/homePage/categories/laptop.svg',
            },
            {
              title:'RH',
              icon:'assets/homePage/categories/mueble.svg',
            }];
          this.categoriesRow5=[
            {
              title:'Veterinaria',
              icon:'assets/homePage/categories/celular.svg',
            },
            {
              title:'Agricultura',
              icon:'assets/homePage/categories/game.svg',
            },
            {
              title:'Logística',
              icon:'assets/homePage/categories/labial.svg',
            },
            {
              title:'Almacén',
              icon:'assets/homePage/categories/laptop.svg',
            },
            {
              title:'Construcción',
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
    this.router.navigate([`/home/item-two/${id}`]);
  }
}
