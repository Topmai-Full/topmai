import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPaquetePage } from './form-paquete.page';

const routes: Routes = [
  {
    path: '',
    component: FormPaquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPaquetePageRoutingModule {}
