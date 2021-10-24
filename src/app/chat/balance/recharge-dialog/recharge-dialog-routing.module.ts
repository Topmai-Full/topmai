import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechargeDialogPage } from './recharge-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: RechargeDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechargeDialogPageRoutingModule {}
