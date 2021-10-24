import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import {ItemOnePage} from './item-one/item-one.page';
import {ItemTwoPage} from './item-two/item-two.page';
import {ItemOnePageModule} from './item-one/item-one.module';
import { ItemThreePage } from './item-three/item-three.page';
import { ItemFourPage } from './item-four/item-four.page';
import { ItemFivePage } from './item-five/item-five.page';
import { ItemSixPage } from './item-six/item-six.page';
import { ItemSevenPage } from './item-seven/item-seven.page';
import { ItemEightPage } from './item-eight/item-eight.page';
import { ItemNinePage } from './item-nine/item-nine.page';
import { ItemTenPage } from './item-ten/item-ten.page';
import { ItemElevenPage } from './item-eleven/item-eleven.page';
import { ItemTwelvePage } from './item-twelve/item-twelve.page';
import { ItemThirteenPage } from './item-thirteen/item-thirteen.page';
import { ItemFourteenPage } from './item-fourteen/item-fourteen.page';
import { ItemFifteenPage } from './item-fifteen/item-fifteen.page';
import { ItemSixteenPage } from './item-sixteen/item-sixteen.page';
import { ItemSeventeenPage } from './item-seventeen/item-seventeen.page';
import { ItemEighteenPage } from './item-eighteen/item-eighteen.page';
import { ItemNighteenPage } from './item-nighteen/item-nighteen.page';
import { ItemTwentyPage } from './item-twenty/item-twenty.page';
import { ItemTwentyOnePage } from './item-twenty-one/item-twenty-one.page';

// *QR

import { ServiciosPage } from './servicios/servicios.page';
import { EmpleosPage } from './empleos/empleos.page';
import { MascotasPage } from './mascotas/mascotas.page';
import { ArtesaniaPage } from './artesania/artesania.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ItemOnePageModule,
  ],
  declarations: [HomePage,ItemOnePage,
     ItemTwoPage,
     ItemThreePage,
     ItemFourPage,
     ItemFivePage,
     ItemSixPage,
     ItemSevenPage,
     ItemEightPage,
     ItemNinePage,
     ItemTenPage,
     ItemElevenPage,
     ItemTwelvePage,
     ItemThirteenPage,
     ItemFourteenPage,
     ItemFifteenPage,
     ItemSixteenPage,
     ItemSeventeenPage,
     ItemEighteenPage,
     ItemNighteenPage,
     ItemTwentyPage,
     ItemTwentyOnePage,
     ServiciosPage,
     EmpleosPage,
     MascotasPage,
     ArtesaniaPage
]
})
export class HomePageModule {}
