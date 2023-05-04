import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePage2RoutingModule } from './create-page2-routing.module';
import { CreatePage2Component } from './create-page2.component';


@NgModule({
  declarations: [
    CreatePage2Component
  ],
  imports: [
    CommonModule,
    CreatePage2RoutingModule
  ]
})
export class CreatePage2Module { }
