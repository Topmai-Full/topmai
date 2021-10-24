import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneChatPage } from './one-chat.page';

const routes: Routes = [
  {
    path: '',
    component: OneChatPage
  },  {
    path: 'payment-dialog',
    loadChildren: () => import('./payment-dialog/payment-dialog.module').then( m => m.PaymentDialogPageModule)
  },
  {
    path: 'modal-tranfer',
    loadChildren: () => import('./modal-tranfer/modal-tranfer.module').then( m => m.ModalTranferPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneChatPageRoutingModule {}
