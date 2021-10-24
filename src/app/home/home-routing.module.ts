import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'item-two',
    loadChildren: () => import('./item-two/item-two.module').then( m => m.ItemTwoPageModule)
  },
  {
    path: 'view-one-item',
    loadChildren: () => import('./view-one-item/view-one-item.module').then( m => m.ViewOneItemPageModule)
  },
  {
    path: 'item-three',
    loadChildren: () => import('./item-three/item-three.module').then( m => m.ItemThreePageModule)
  },
  {
    path: 'item-four',
    loadChildren: () => import('./item-four/item-four.module').then( m => m.ItemFourPageModule)
  },
  {
    path: 'item-five',
    loadChildren: () => import('./item-five/item-five.module').then( m => m.ItemFivePageModule)
  },
  {
    path: 'item-six',
    loadChildren: () => import('./item-six/item-six.module').then( m => m.ItemSixPageModule)
  },
  {
    path: 'item-seven',
    loadChildren: () => import('./item-seven/item-seven.module').then( m => m.ItemSevenPageModule)
  },
  {
    path: 'item-eight',
    loadChildren: () => import('./item-eight/item-eight.module').then( m => m.ItemEightPageModule)
  },
  {
    path: 'item-nine',
    loadChildren: () => import('./item-nine/item-nine.module').then( m => m.ItemNinePageModule)
  },
  {
    path: 'item-ten',
    loadChildren: () => import('./item-ten/item-ten.module').then( m => m.ItemTenPageModule)
  },
  {
    path: 'item-eleven',
    loadChildren: () => import('./item-eleven/item-eleven.module').then( m => m.ItemElevenPageModule)
  },
  {
    path: 'item-twelve',
    loadChildren: () => import('./item-twelve/item-twelve.module').then( m => m.ItemTwelvePageModule)
  },
  {
    path: 'item-thirteen',
    loadChildren: () => import('./item-thirteen/item-thirteen.module').then( m => m.ItemThirteenPageModule)
  },
  {
    path: 'item-fourteen',
    loadChildren: () => import('./item-fourteen/item-fourteen.module').then( m => m.ItemFourteenPageModule)
  },
  {
    path: 'item-fifteen',
    loadChildren: () => import('./item-fifteen/item-fifteen.module').then( m => m.ItemFifteenPageModule)
  },
  {
    path: 'item-sixteen',
    loadChildren: () => import('./item-sixteen/item-sixteen.module').then( m => m.ItemSixteenPageModule)
  },
  {
    path: 'item-seventeen',
    loadChildren: () => import('./item-seventeen/item-seventeen.module').then( m => m.ItemSeventeenPageModule)
  },
  {
    path: 'item-eighteen',
    loadChildren: () => import('./item-eighteen/item-eighteen.module').then( m => m.ItemEighteenPageModule)
  },
  {
    path: 'item-nighteen',
    loadChildren: () => import('./item-nighteen/item-nighteen.module').then( m => m.ItemNighteenPageModule)
  },
  {
    path: 'item-twenty',
    loadChildren: () => import('./item-twenty/item-twenty.module').then( m => m.ItemTwentyPageModule)
  },
  {
    path: 'item-twenty-one',
    loadChildren: () => import('./item-twenty-one/item-twenty-one.module').then( m => m.ItemTwentyOnePageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'empleos',
    loadChildren: () => import('./empleos/empleos.module').then( m => m.EmpleosPageModule)
  },
  {
    path: 'mascotas',
    loadChildren: () => import('./mascotas/mascotas.module').then( m => m.MascotasPageModule)
  },
  {
    path: 'artesania',
    loadChildren: () => import('./artesania/artesania.module').then( m => m.ArtesaniaPageModule)
  },


//  {
//    path: 'seller-profile-model',
//    loadChildren: () => import('./seller-profile-model/seller-profile-model.module').then( m => m.SellerProfileModelPageModule)
//  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
