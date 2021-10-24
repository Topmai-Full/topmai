import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderWizardPageRoutingModule } from './order-wizard-routing.module';

import { OrderWizardPage } from './order-wizard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderWizardPageRoutingModule
  ],
  declarations: [OrderWizardPage]
})
export class OrderWizardPageModule {}
