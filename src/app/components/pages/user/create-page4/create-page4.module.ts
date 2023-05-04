import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePage4RoutingModule } from './create-page4-routing.module';
import { CreatePage4Component } from './create-page4.component';


@NgModule({
  declarations: [
    CreatePage4Component
  ],
  imports: [
    CommonModule,
    CreatePage4RoutingModule
  ]
})
export class CreatePage4Module { }
