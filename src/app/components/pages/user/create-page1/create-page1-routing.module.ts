import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePage1Component } from './create-page1.component';

const routes: Routes = [{ path: '', component: CreatePage1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePage1RoutingModule { }
