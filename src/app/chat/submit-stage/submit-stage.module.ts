import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitStagePageRoutingModule } from './submit-stage-routing.module';

import { SubmitStagePage } from './submit-stage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitStagePageRoutingModule
  ],
  declarations: [SubmitStagePage]
})
export class SubmitStagePageModule {}
