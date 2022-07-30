import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/layout/layout.module').then( m => m.LayoutPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'reset-password-email',
    loadChildren: () => import('./auth/pages/password/email/email.module').then( m => m.EmailPageModule),
  },  
  {
    path: 'change-password',
    loadChildren: () => import('./auth/pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'app',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
        canLoad:[AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
        canLoad:[AuthGuard]
      },
      {
        path: 'conductores',
        loadChildren: () => import('./pages/drivers/drivers.module').then( m => m.DriversPageModule),
        canLoad:[AuthGuard]
      },    
      {
        path: 'edit',
        loadChildren: () => import('./pages/profile/edit/edit.module').then( m => m.EditPageModule)
      },
      {
        path: 'update-archives',
        loadChildren: () => import('./pages/profile/update-archives/update-archives.module').then( m => m.UpdateArchivesPageModule)
      },
      {
        path: 'vehiculos',
        canLoad:[AuthGuard],
        loadChildren: () => import('./pages/vehicles/vehicles.module').then( m => m.VehiclesPageModule)
      },
      {
        path: 'waiting-list',
        loadChildren: () => import('./pages/waiting-list/waiting-list.module').then( m => m.WaitingListPageModule)
      },
      {
        path: 'travels',
        canLoad:[AuthGuard],
        loadChildren: () => import('./pages/travels/travels.module').then( m => m.TravelsPageModule)
      },
      {
        path: 'my-travels',
        canLoad:[AuthGuard],
        loadChildren: () => import('./pages/my-travels/my-travels.module').then( m => m.MyTravelsPageModule)
      },
    ],
  },

    {
      path: '',
      redirectTo: '/app/home',
      pathMatch: 'full'
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
