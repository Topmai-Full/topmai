import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscovertwoPageRoutingModule } from './discovertwo-routing.module';

import { DiscovertwoPage } from './discovertwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscovertwoPageRoutingModule
  ],
  declarations: [DiscovertwoPage]
})
export class DiscovertwoPageModule {}
