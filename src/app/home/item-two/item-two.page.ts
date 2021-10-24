import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-item-two',
  templateUrl: './item-two.page.html',
  styleUrls: ['./item-two.page.scss'],
})
export class ItemTwoPage implements OnInit {
  @Input() cateId: string
  items: Array<any>;
  categoriesRow1: Array<any>;
  categoriesRow2: Array<any>;
  categoriesRow3: Array<any>;
  categoriesRow4: Array<any>;
  topSliderItems: Array<any>;
  constructor(private router: Router, private catSrv: CategoryService) {
    this.items = [{
      id: 1,
      title: 'Refrigerador Qianku',
      subTitle: 'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img: 'assets/homePage/item-two/1.png',
      people: 'assets/homePage/item-two/g1.png',
      ventas: '300+ ventas'
    }, {
      id: 2,
      title: 'Refrigerador Qianku',
      subTitle: 'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img: 'assets/homePage/item-two/2.png',
      people: 'assets/homePage/item-two/g3.png',
      ventas: '300+ ventas'
    }, {
      id: 3,
      title: 'Refrigerador Qianku',
      subTitle: 'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img: 'assets/homePage/item-two/3.png',
      people: 'assets/homePage/item-two/g3.png',
      ventas: '300+ ventas'
    }, {
      id: 4,
      title: 'Refrigerador Qianku',
      subTitle: 'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img: 'assets/homePage/item-two/4.png',
      people: 'assets/homePage/item-two/g4.png',
      ventas: '300+ ventas'
    }, {
      id: 5,
      title: 'Refrigerador Qianku',
      subTitle: 'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img: 'assets/homePage/item-two/1.png',
      people: 'assets/homePage/item-two/g4.png',
      ventas: '300+ ventas'
    }, {
      id: 6,
      title: 'Refrigerador Qianku',
      subTitle: 'Envío Gratis',
      price: '$000',
      priceNote: '$30',
      rembolso: 'Rembolso Rápido',
      img: 'assets/homePage/item-two/2.png',
      people: 'assets/homePage/item-two/g4.png',
      ventas: '300+ ventas'
    }];
    this.categoriesRow1 = [
      {
        title: 'Estudio',
        icon: 'assets/homePage/categories/muebles/estudio.png',
      },
      {
        title: 'Sillas',
        icon: 'assets/homePage/categories/muebles/sillasytaburetes.jpg',
      },
      {
        title: 'Oficina',
        icon: 'assets/homePage/categories/muebles/oficina.png',
      },
      {
        title: 'Dormitorio',
        icon: 'assets/homePage/categories/muebles/dormitorio.png',
      },
      {
        title: 'Salón',
        icon: 'assets/homePage/categories/muebles/salon.png',
      }];
    this.categoriesRow2 = [
      {
        title: 'Comedor',
        icon: 'assets/homePage/categories/muebles/comedor.png',
      },
      {
        title: 'Infantil',
        icon: 'assets/homePage/categories/muebles/infantil.png',
      },
      {
        title: 'Patio',
        icon: 'assets/homePage/categories/muebles/patio.png',
      },
      {
        title: 'Estante',
        icon: 'assets/homePage/categories/muebles/estante.png',
      },
      {
        title: 'vestibulo',
        icon: 'assets/homePage/categories/muebles/vestibulo.png',
      }];
    this.categoriesRow3 = [
      {
        title: 'Importaciones de ultramar',
        icon: 'assets/homePage/categories/super.svg',
      },
      {
        title: 'Medicina salud',
        icon: 'assets/homePage/categories/tenis.svg',
      },
      {
        title: 'Servicios domésticos',
        icon: 'assets/homePage/categories/audio.svg',
      },
      {
        title: 'Inactivo de segunda mano',
        icon: 'assets/homePage/categories/camara.svg',
      },
      {
        title: 'Comida deliciosa',
        icon: 'assets/homePage/categories/carro.svg',
      }];
    this.categoriesRow4 = [
      {
        title: 'Importaciones de ultramar',
        icon: 'assets/homePage/categories/celular.svg',
      },
      {
        title: 'Medicina salud',
        icon: 'assets/homePage/categories/game.svg',
      },
      {
        title: 'Servicios domésticos',
        icon: 'assets/homePage/categories/labial.svg',
      },
      {
        title: 'Inactivo de segunda mano',
        icon: 'assets/homePage/categories/laptop.svg',
      },
      {
        title: 'Comida deliciosa',
        icon: 'assets/homePage/categories/mueble.svg',
      }];
  }

  getClass(i) {
    if (i === 0) {
      { return 'left-col first-row'; }
    }
    else if (i === 1) {
      { return 'right-col first-row'; }
    }
    else if (i % 2 === 0) { return 'left-col'; }
    else { return 'right-col'; }
  }

  ngOnInit() {
    console.log(this.cateId)
    this.catSrv.getAllSub(this.cateId).subscribe((resp: any) => {
      console.log(resp);
    })
  }

  gotoItem(id) {
    this.router.navigate([`/home/item-two/${id}`]);
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
