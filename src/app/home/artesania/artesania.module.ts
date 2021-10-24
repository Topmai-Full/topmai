import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtesaniaPageRoutingModule } from './artesania-routing.module';

import { ArtesaniaPage } from './artesania.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtesaniaPageRoutingModule
  ],
  // declarations: [ArtesaniaPage]
})
export class ArtesaniaPageModule {}
