import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemOnePageRoutingModule } from './item-one-routing.module';

import {ItemSliderComponent} from './item-slider/item-slider.component';
import {VirticalItemsComponent} from './virtical-items/virtical-items.component';
import {HorizontalItemsComponent} from './horizontal-items/horizontal-items.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemOnePageRoutingModule
  ],
  exports: [
    VirticalItemsComponent,
    HorizontalItemsComponent,
    ItemSliderComponent
  ],
  declarations: [ItemSliderComponent, VirticalItemsComponent, HorizontalItemsComponent]
})
export class ItemOnePageModule {}
