import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-fifteen',
  templateUrl: './item-fifteen.page.html',
  styleUrls: ['./item-fifteen.page.scss'],
})
export class ItemFifteenPage implements OnInit {

  items: Array<any>;
  categoriesRow1: Array<any>;
  categoriesRow2: Array<any>;
  categoriesRow3: Array<any>;
  categoriesRow4: Array<any>;
  constructor() {
    this.categoriesRow1=[
      {
      title:'Equipaje',
      icon:'assets/homePage/categories/bolsazapatos/equipaje.png',
      },
      {
      title:'Botas',
      icon:'assets/homePage/categories/bolsazapatos/botas.png',
      },
      {
        title:'Gafas',
        icon:'assets/homePage/categories/bolsazapatos/gafas.png',
      },
      {
        title:'Sandalia',
        icon:'assets/homePage/categories/bolsazapatos/sandalias.png',
      },
      {
        title:'Cinturon',
        icon:'assets/homePage/categories/bolsazapatos/cinturon.png',
      }];
      this.categoriesRow2=[
        {
          title:'Lona',
          icon:'assets/homePage/categories/bolsazapatos/lona.png',
        },
        {
          title:'Altos',
          icon:'assets/homePage/categories/bolsazapatos/altos.png',
        },
        {
          title:'Hombre',
          icon:'assets/homePage/categories/bolsazapatos/hombre.png',
        },
        {
          title:'Bolso',
          icon:'assets/homePage/categories/bolsazapatos/bolso.png',
        },
        {
          title:'Mujer',
          icon:'assets/homePage/categories/bolsazapatos/mujer.png',
        }];
        this.categoriesRow3=[
          {
            title:'Cuero',
            icon:'assets/homePage/categories/bolsazapatos/cuero.png',
          },
          {
            title:'Mochila',
            icon:'assets/homePage/categories/bolsazapatos/mochila.png',
          },
          {
            title:'Otros...',
            icon:'assets/homePage/categories/bolsazapatos/mochila.png',
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


  ngOnInit() {
  }

}
