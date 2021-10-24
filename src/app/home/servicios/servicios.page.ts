import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  items: Array<any>;
  categoriesRow1: Array<any>;
  categoriesRow2: Array<any>;
  categoriesRow3: Array<any>;
  categoriesRow4: Array<any>;
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
      title:'Belleza',
      icon:'assets/homePage/categories/Servicios/belleza.png',
      },
      {
      title:'Cursos',
      icon:'assets/homePage/categories/Servicios/cursos.png',
      },
      {
        title:'Eventos',
        icon:'assets/homePage/categories/Servicios/eventos.png',
      },
      {
        title:'Hogar',
        icon:'assets/homePage/categories/Servicios/hogar.png',
      },
      {
        title:'Imprenta',
        icon:'assets/homePage/categories/Servicios/imprenta.png',
      }];
      this.categoriesRow2=[
        {
          title:'Reparación',
          icon:'assets/homePage/categories/Servicios/servicio.png',
        },
        {
          title:'Transporte',
          icon:'assets/homePage/categories/Servicios/transporte.png',
        },
        {
          title:'Veterinaria',
          icon:'assets/homePage/categories/Servicios/veterinario.png',
        },
        {
          title:'',
          icon:'',
        },
        {
          title:'',
          icon:'',
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
    this.router.navigate([`/home/item-two/${id}`]);
  }

}
