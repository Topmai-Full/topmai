import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawalsDialogPageRoutingModule } from './withdrawals-dialog-routing.module';

import { WithdrawalsDialogPage } from './withdrawals-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawalsDialogPageRoutingModule
  ],
  declarations: [WithdrawalsDialogPage]
})
export class WithdrawalsDialogPageModule {}
