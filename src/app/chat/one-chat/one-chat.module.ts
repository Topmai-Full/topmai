import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneChatPageRoutingModule } from './one-chat-routing.module';

import { OneChatPage } from './one-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneChatPageRoutingModule
  ],
  declarations: [OneChatPage]
})
export class OneChatPageModule {}
