import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentDialogPageRoutingModule } from './payment-dialog-routing.module';

import { PaymentDialogPage } from './payment-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentDialogPageRoutingModule
  ],
  declarations: [PaymentDialogPage]
})
export class PaymentDialogPageModule {}
