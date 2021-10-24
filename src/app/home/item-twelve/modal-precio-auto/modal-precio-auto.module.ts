import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPrecioAutoPageRoutingModule } from './modal-precio-auto-routing.module';

import { ModalPrecioAutoPage } from './modal-precio-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPrecioAutoPageRoutingModule
  ],
  declarations: [ModalPrecioAutoPage]
})
export class ModalPrecioAutoPageModule {}
