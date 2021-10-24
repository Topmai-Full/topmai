import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemTwelvePage } from './item-twelve.page';

const routes: Routes = [
  {
    path: '',
    component: ItemTwelvePage
  },
  {
    path: 'nextautos',
    loadChildren: () => import('./nextautos/nextautos.module').then( m => m.NextautosPageModule)
  },
  {
    path: 'modal-precio-auto',
    loadChildren: () => import('./modal-precio-auto/modal-precio-auto.module').then( m => m.ModalPrecioAutoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemTwelvePageRoutingModule {}
