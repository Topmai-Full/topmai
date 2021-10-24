import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciptConfirmationModelPageRoutingModule } from './recipt-confirmation-model-routing.module';

import { ReciptConfirmationModelPage } from './recipt-confirmation-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReciptConfirmationModelPageRoutingModule
  ],
  declarations: [ReciptConfirmationModelPage]
})
export class ReciptConfirmationModelPageModule {}
