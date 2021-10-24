import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawalsDialogPage } from './withdrawals-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawalsDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawalsDialogPageRoutingModule {}
