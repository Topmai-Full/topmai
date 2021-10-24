import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPaqueteriasPage } from './form-paqueterias.page';

const routes: Routes = [
  {
    path: '',
    component: FormPaqueteriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPaqueteriasPageRoutingModule {}
