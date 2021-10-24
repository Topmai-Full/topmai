import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopmaivideoPageRoutingModule } from './topmaivideo-routing.module';

import { TopmaivideoPage } from './topmaivideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopmaivideoPageRoutingModule
  ],
  declarations: [TopmaivideoPage]
})
export class TopmaivideoPageModule {}
