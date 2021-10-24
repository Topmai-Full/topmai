import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import {VehiculosPage} from './vehiculos/vehiculos.page';


const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat-bottom-toolbar/chat-bottom-toolbar.module').then( m => m.ChatBottomToolbarPageModule)
  },
  {
    path: 'add-categories',
    loadChildren: () => import('./chat/add-categories/add-categories.module').then( m => m.AddCategoriesPageModule)
  },
  // {
  //   path: 'wallet',
  //   loadChildren: () => import('./chat/wallet/wallet.module').then( m => m.WalletPageModule)
  // },
  {
    path: 'discover',
    loadChildren: () => import('./chat/discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'home/item-two/:id',
    loadChildren: () => import('./home/view-one-item/view-one-item.module').then( m => m.ViewOneItemPageModule)
  },
  {
    path: 'chat/one-chat',
    loadChildren: () => import('./chat/one-chat/one-chat.module').then( m => m.OneChatPageModule)
  },
  {
    path: 'submit-stage',
    loadChildren: () => import('./chat/submit-stage/submit-stage.module').then( m => m.SubmitStagePageModule)
  },
  {
    path: 'album-model',
    loadChildren: () => import('./chat/album-model/album-model.module').then( m => m.AlbumModelPageModule)
  },
  {
    path: 'profile1',
    loadChildren: () => import('./chat/profile1/profile1.module').then( m => m.Profile1PageModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./chat/transferencia/transferencia.module').then( m => m.TransferenciaPageModule)
  },
  {
    path: 'form-paquete',
    loadChildren: () => import('./order-wizard/form-paquete/form-paquete.module').then( m => m.FormPaquetePageModule)
  },
  {
    path: 'form-paqueterias',
    loadChildren: () => import('./order-wizard/form-paqueterias/form-paqueterias.module').then( m => m.FormPaqueteriasPageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'vehiculos',
    loadChildren: () => import('./vehiculos/vehiculos.module').then( m => m.VehiculosPageModule)

  },
   {
     path: 'login',
     loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginPageModule)

 },
 {
    path: 'sign-in',
   loadChildren: () => import('./authentication/sign-in/sign-in.module').then( m => m.SignInPageModule)
 },
  {

    path: 'order-wizard',
    loadChildren: () => import('./order-wizard/order-wizard.module').then( m => m.OrderWizardPageModule)
  },
// {
//     path: 'login',
//     loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//   },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  // },
  {
    path: 'monedero',
    loadChildren: () => import('./chat/monedero/monedero.module').then( m => m.MonederoPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./chat/wallet/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./chat/wallet/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./chat/contact-list/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'balance',
    loadChildren: () => import('./chat/balance/balance.module').then( m => m.BalancePageModule)
  },
  {
    path: 'addcard',
    loadChildren: () => import('./chat/addcard/addcard.module').then( m => m.AddcardPageModule)
  },
  {
    path: 'chat/resolve-center',
    loadChildren: () => import('./chat/resolve-center/resolve-center.module').then( m => m.ResolveCenterPageModule)
  },
  {
    path: 'my-cards',
    loadChildren: () => import('./my-cards/my-cards.module').then( m => m.MyCardsPageModule)
  },
  {
    path: 'video-home',
    loadChildren: () => import('./video-home/video-home.module').then( m => m.VideoHomePageModule)
  },
  {
    path: 'presentation',
    loadChildren: () => import('./authentication/presentation/presentation.module').then( m => m.PresentationPageModule)
  },
  {
    path: 'discovertwo',
    loadChildren: () => import('./chat/discovertwo/discovertwo.module').then( m => m.DiscovertwoPageModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./chat/privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },












  // {
  //   path: 'nextautos',
  //   loadChildren: () => import('./home/item-twelve/nextautos/nextautos.module').then( m => m.NextautosPageModule)
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
