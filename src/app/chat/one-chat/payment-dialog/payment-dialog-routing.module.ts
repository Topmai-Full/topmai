import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentDialogPage } from './payment-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentDialogPageRoutingModule {}
