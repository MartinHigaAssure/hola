import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePage4Component } from './create-page4.component';

const routes: Routes = [{ path: '', component: CreatePage4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePage4RoutingModule { }
