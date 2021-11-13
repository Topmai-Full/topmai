import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'about-me',
        loadChildren: () => import('../about-me/about-me.module').then(m => m.AboutMePageModule)
      },
      {
        path: 'nextautos',
        loadChildren: () => import('../home/item-twelve/nextautos/nextautos.module').then(m => m.NextautosPageModule)
      },
      {
        path: 'topmaivideo',
        loadChildren: () => import('../topmaivideo/topmaivideo.module').then(m => m.TopmaivideoPageModule)
      },
      {
        path: 'order-wizard',
        loadChildren: () => import('../order-wizard/order-wizard.module').then(m => m.OrderWizardPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
