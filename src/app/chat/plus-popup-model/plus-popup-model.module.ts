import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlusPopupModelPageRoutingModule } from './plus-popup-model-routing.module';

import { PlusPopupModelPage } from './plus-popup-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlusPopupModelPageRoutingModule
  ],
  declarations: [PlusPopupModelPage]
})
export class PlusPopupModelPageModule {}
