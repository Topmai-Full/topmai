import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderWizardPage } from './order-wizard.page';

const routes: Routes = [
  {
    path: '',
    component: OrderWizardPage
  },
  {
    path: 'form-paquete',
    loadChildren: () => import('./form-paquete/form-paquete.module').then( m => m.FormPaquetePageModule)
  },  {
    path: 'form-paqueterias',
    loadChildren: () => import('./form-paqueterias/form-paqueterias.module').then( m => m.FormPaqueteriasPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderWizardPageRoutingModule {}
