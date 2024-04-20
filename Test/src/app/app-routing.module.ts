import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'accuiel',
    loadChildren: () => import('./accuiel/accuiel.module').then( m => m.AccuielPageModule)
  },
  {
    path: 'amis',
    loadChildren: () => import('./amis/amis.module').then( m => m.AmisPageModule)
  },
  {
    path: 'enimis',
    loadChildren: () => import('./enimis/enimis.module').then( m => m.EnimisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
