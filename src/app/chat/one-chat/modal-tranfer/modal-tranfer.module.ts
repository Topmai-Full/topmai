import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTranferPageRoutingModule } from './modal-tranfer-routing.module';

import { ModalTranferPage } from './modal-tranfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTranferPageRoutingModule
  ],
  declarations: [ModalTranferPage]
})
export class ModalTranferPageModule {}
