import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTranferPage } from './modal-tranfer.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTranferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTranferPageRoutingModule {}
