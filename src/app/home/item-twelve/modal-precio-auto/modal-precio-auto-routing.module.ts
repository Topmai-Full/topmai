import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPrecioAutoPage } from './modal-precio-auto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPrecioAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPrecioAutoPageRoutingModule {}
