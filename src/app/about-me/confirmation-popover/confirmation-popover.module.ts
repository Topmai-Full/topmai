import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPopoverPageRoutingModule } from './confirmation-popover-routing.module';

import { ConfirmationPopoverPage } from './confirmation-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPopoverPageRoutingModule
  ],
  declarations: [ConfirmationPopoverPage]
})
export class ConfirmationPopoverPageModule {}
