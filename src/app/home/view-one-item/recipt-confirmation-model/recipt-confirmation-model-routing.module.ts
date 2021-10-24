import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciptConfirmationModelPage } from './recipt-confirmation-model.page';

const routes: Routes = [
  {
    path: '',
    component: ReciptConfirmationModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciptConfirmationModelPageRoutingModule {}
