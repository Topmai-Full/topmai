import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatBottomToolbarPageRoutingModule } from './chat-bottom-toolbar-routing.module';

import { ChatBottomToolbarPage } from './chat-bottom-toolbar.page';
import {PlusPopupModelPage} from '../chat/plus-popup-model/plus-popup-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatBottomToolbarPageRoutingModule
  ],
  declarations: [ChatBottomToolbarPage,PlusPopupModelPage]
})
export class ChatBottomToolbarPageModule {}
