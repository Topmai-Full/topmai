import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatBottomToolbarPage } from './chat-bottom-toolbar.page';

const routes: Routes = [
  {
    path: '',
    component: ChatBottomToolbarPage,
    children: [
      {
        path: 'chat-list',
        loadChildren: () => import('../chat/chats-list/chats-list.module').then( m => m.ChatsListPageModule)
      },
      {
        path: 'contact-list',
        loadChildren: () => import('../chat/contact-list/contact-list.module').then( m => m.ContactListPageModule)
      },
        {
    path: 'wallet',
    loadChildren: () => import('../chat/wallet/wallet.module').then( m => m.WalletPageModule)
  },
   
      {
        path: '',
        redirectTo: 'chat-list',
        pathMatch: 'full'
      },
 
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatBottomToolbarPageRoutingModule {}
