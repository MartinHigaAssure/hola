import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'create-page1', loadChildren: () => import('./components/pages/user/create-page1/create-page1.module').then(m => m.CreatePage1Module) }, { path: 'create-page2', loadChildren: () => import('./components/pages/user/create-page2/create-page2.module').then(m => m.CreatePage2Module) }, { path: 'create-page3', loadChildren: () => import('./components/pages/user/create-page3/create-page3.module').then(m => m.CreatePage3Module) }, { path: 'create-page4', loadChildren: () => import('./components/pages/user/create-page4/create-page4.module').then(m => m.CreatePage4Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
