import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePage2Component } from './create-page2.component';

const routes: Routes = [{ path: '', component: CreatePage2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePage2RoutingModule { }
