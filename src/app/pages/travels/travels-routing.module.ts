import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelsPage } from './travels.page';

const routes: Routes = [
  {
    path: '',
    component: TravelsPage
  },
  {
    path: 'search-list',
    loadChildren: () => import('./search-list/search-list.module').then( m => m.SearchListPageModule)
  },
  {
    path: 'detail-search',
    loadChildren: () => import('./detail-search/detail-search.module').then( m => m.DetailSearchPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelsPageRoutingModule {}
