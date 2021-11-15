import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewOneItemPageRoutingModule } from './view-one-item-routing.module';

import { ViewOneItemPage } from './view-one-item.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewOneItemPageRoutingModule
  ],
  declarations: [ViewOneItemPage]
})
export class ViewOneItemPageModule {}
