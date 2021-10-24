import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPaquetePageRoutingModule } from './form-paquete-routing.module';

import { FormPaquetePage } from './form-paquete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPaquetePageRoutingModule
  ],
  declarations: [FormPaquetePage]
})
export class FormPaquetePageModule {}
