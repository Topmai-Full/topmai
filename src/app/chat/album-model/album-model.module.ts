import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumModelPageRoutingModule } from './album-model-routing.module';

import { AlbumModelPage } from './album-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumModelPageRoutingModule
  ],
  declarations: [AlbumModelPage]
})
export class AlbumModelPageModule {}
