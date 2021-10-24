/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-item-one',
  templateUrl: './item-one.page.html',
  styleUrls: ['./item-one.page.scss'],
})
export class ItemOnePage implements OnInit {
  items: Array<any>;
  categoriesRow1: Array<any>;
  categoriesRow2: Array<any>;
  categoriesRow3: Array<any>;
  categoriesRow4: Array<any>;
  topSliderItems: Array<any>;
  secetedCategory;
  itemsVirticale;
  baseUrl = environment.baseUrl;
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;
  categories: any;

  constructor(private router: Router, private catSrv: CategoryService) {
    this.secetedCategory = 0;

    this.items = [
      {
        title: 'Electrónica',
        img: 'assets/homePage/items/electronica.png',
        price: '$000',
        discountPrice: '$30'
      },
      {
        title: 'Belleza',
        img: 'assets/homePage/items/3.png',
        price: '$000',
        discountPrice: '$30'
      },
      {
        title: 'Ropa',
        img: 'assets/homePage/items/ropa.jpg',
        price: '$000',
        discountPrice: '$30'
      },
      {
        title: 'Comida',
        img: 'assets/homePage/items/comida.png',
        price: '$000',
        discountPrice: '$30'
      },
      {
        title: 'Servicios',
        img: 'assets/homePage/items/servicios.jpg',
        price: '$000',
        discountPrice: '$30'
      },



    ];
    this.categoriesRow1 = [
      {
        title: 'vehículos',
        icon: 'assets/homePage/categories/PNG4/vehiculo.png',
        to: 'vehiculos'
        // icon:'assets/homePage/categories/PNG2/brillo1.png',
      },
      {
        title: 'Cámaras',
        icon: 'assets/homePage/categories/PNG4/camara.png',
      },
      {
        title: 'Celulares',
        icon: 'assets/homePage/categories/PNG4/celular.png',
        // icon:'assets/homePage/categories/PNG2/brillo4.png',
      },
      {
        title: 'PC',
        icon: 'assets/homePage/categories/PNG4/computacion.png',
        // icon:'assets/homePage/categories/PNG2/brillo3.png',
      },
      {
        title: 'Belleza',
        icon: 'assets/homePage/categories/PNG4/belleza.png',
      }];
    this.categoriesRow2 = [
      {
        title: 'Videojuegos',
        icon: 'assets/homePage/categories/PNG4/consolas.png',
      },
      {
        title: 'Servicios',
        icon: 'assets/homePage/categories/PNG4/servicios.png',
      },
      {
        title: 'Vivienda',

        icon: 'assets/homePage/categories/PNG4/construccion3.png',
      },
      {
        title: 'Libros',
        icon: 'assets/homePage/categories/PNG4/libros.png',
      },
      {
        title: 'Hogar',
        icon: 'assets/homePage/categories/PNG4/casa.png',
      }];
    this.categoriesRow3 = [
      {
        title: 'Ropa',
        icon: 'assets/homePage/categories/PNG4/ropa.png',
      },
      {
        title: 'Alimentos',
        icon: 'assets/homePage/categories/PNG4/bebidas.png',
      },
      {
        title: 'Multimedia',
        icon: 'assets/homePage/categories/PNG4/music.png',
      },
      {
        title: 'Joyas',
        icon: 'assets/homePage/categories/PNG4/joyeria.png',
      },
      {
        title: 'Deportes',
        icon: 'assets/homePage/categories/PNG4/deporte.png',
      }];
    this.categoriesRow4 = [
      {
        title: 'Instrumentos',
        icon: 'assets/homePage/categories/PNG4/instrumentos.png',
      },
      {
        title: 'Bebés',
        icon: 'assets/homePage/categories/PNG4/bebes.png',
      },
      {
        title: 'Audio',
        icon: 'assets/homePage/categories/PNG4/audiovideo.png',
      },
      {
        title: 'Muebles',
        icon: 'assets/homePage/categories/PNG4/muebles.png',
      },
      {
        title: 'Juguetes',
        icon: 'assets/homePage/categories/PNG4/juguetes.png',
      }];
    this.topSliderItems = [
      {
        title: 'Item One',
      },
      {
        title: 'Item Two',
      },
      {
        title: 'Item Three',
      },
      {
        title: 'Item Four',
      },
      {
        title: 'Item Five',
      },
      {
        title: 'Item Six',
      },
      {
        title: 'Item Seven',
      }
    ];
  }
  ngOnInit() {
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date('01/01/' + (this.now.getFullYear() + 1) + ' 00:00');
      this.showDate();
    });
    this.catSrv.getAll().subscribe((resp: any) => {
      console.log(resp);
      this.categories = resp.data;
      // if(resp.data.length <= 10)
      // for (let i = 0; i < resp.data.length; i++) {
      //   this.categories.push(resp.data[i]);
      // }
    });
  }
  showDate() {
    const distance = this.end - this.now;
    this.day = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    this.minutes = Math.floor((distance % this._hour) / this._minute);
    this.seconds = Math.floor((distance % this._minute) / this._second);
  }

  goto(url) {
    this.router.navigate([url]);
  }

}
