import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalancePage } from './balance.page';

const routes: Routes = [
  {
    path: '',
    component: BalancePage
  },
  {
    path: 'withdrawals-dialog',
    loadChildren: () => import('./withdrawals-dialog/withdrawals-dialog.module').then( m => m.WithdrawalsDialogPageModule)
  },
  {
    path: 'recharge-dialog',
    loadChildren: () => import('./recharge-dialog/recharge-dialog.module').then( m => m.RechargeDialogPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancePageRoutingModule {}
