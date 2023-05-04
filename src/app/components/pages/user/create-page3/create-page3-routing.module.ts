import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePage3Component } from './create-page3.component';

const routes: Routes = [{ path: '', component: CreatePage3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePage3RoutingModule { }
