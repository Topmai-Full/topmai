import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPaqueteriasPageRoutingModule } from './form-paqueterias-routing.module';

import { FormPaqueteriasPage } from './form-paqueterias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPaqueteriasPageRoutingModule
  ],
  declarations: [FormPaqueteriasPage]
})
export class FormPaqueteriasPageModule {}
