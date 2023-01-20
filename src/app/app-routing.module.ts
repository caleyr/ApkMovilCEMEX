import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BrowserUtils } from '@azure/msal-browser';
import { AuthGuard } from './guards/auth.guard';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'reset-password-email',
    loadChildren: () => import('./auth/pages/password/email/email.module').then(m => m.EmailPageModule),
  },
  {
    path: 'change-password',
    loadChildren: () => import('./auth/pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'app',
    canActivate: [MsalGuard],
    children: [
      {
        path: 'home',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'profile',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
      },
      {
        path: 'conductores',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/drivers/drivers.module').then(m => m.DriversPageModule),
      },
      {
        path: 'edit',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/profile/edit/edit.module').then(m => m.EditPageModule)
      },
      {
        path: 'update-archives',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/profile/update-archives/update-archives.module').then(m => m.UpdateArchivesPageModule)
      },
      {
        path: 'vehiculos',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/vehicles/vehicles.module').then(m => m.VehiclesPageModule)
      },
      {
        path: 'waiting-list',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/waiting-list/waiting-list.module').then(m => m.WaitingListPageModule),
      },
      {
        path: 'travels',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/travels/travels.module').then(m => m.TravelsPageModule)
      },
      {
        path: 'my-travels',
        canLoad: [AuthGuard],
        loadChildren: () => import('./pages/my-travels/my-travels.module').then(m => m.MyTravelsPageModule)
      },
    ],
  },
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
