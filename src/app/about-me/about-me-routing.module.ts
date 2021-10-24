import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMePage } from './about-me.page';

const routes: Routes = [
  {
    path: '',
    component: AboutMePage
  },
  {
    path: 'shipping-address-model',
    loadChildren: () => import('./shipping-address-model/shipping-address-model.module').then( m => m.ShippingAddressModelPageModule)
  },
  {
    path: 'confirmation-popover',
    loadChildren: () => import('./confirmation-popover/confirmation-popover.module').then( m => m.ConfirmationPopoverPageModule)
  },
  {
    path: 'profile-model',
    loadChildren: () => import('./profile-model/profile-model.module').then( m => m.ProfileModelPageModule)
  },
  {
    path: 'order-state',
    loadChildren: () => import('./order-state/order-state.module').then( m => m.OrderStatePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutMePageRoutingModule {}
