import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOneItemPage } from './view-one-item.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOneItemPage
  },  {
    path: 'one-item-buy-model',
    loadChildren: () => import('./one-item-buy-model/one-item-buy-model.module').then( m => m.OneItemBuyModelPageModule)
  },
  {
    path: 'recipt-confirmation-model',
    loadChildren: () => import('./recipt-confirmation-model/recipt-confirmation-model.module').then( m => m.ReciptConfirmationModelPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOneItemPageRoutingModule {}
