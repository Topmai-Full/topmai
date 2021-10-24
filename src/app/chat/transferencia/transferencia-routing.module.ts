import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferenciaPage } from './transferencia.page';

const routes: Routes = [
  {
    path: '',
    component: TransferenciaPage
  },  {
    path: 'popup-model',
    loadChildren: () => import('./popup-model/popup-model.module').then( m => m.PopupModelPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferenciaPageRoutingModule {}
