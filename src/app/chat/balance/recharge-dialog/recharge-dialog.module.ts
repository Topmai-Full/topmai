import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechargeDialogPageRoutingModule } from './recharge-dialog-routing.module';

import { RechargeDialogPage } from './recharge-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechargeDialogPageRoutingModule
  ],
  declarations: [RechargeDialogPage]
})
export class RechargeDialogPageModule {}
