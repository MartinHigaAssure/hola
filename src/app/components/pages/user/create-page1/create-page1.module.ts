import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePage1RoutingModule } from './create-page1-routing.module';
import { CreatePage1Component } from './create-page1.component';


@NgModule({
  declarations: [
    CreatePage1Component
  ],
  imports: [
    CommonModule,
    CreatePage1RoutingModule
  ]
})
export class CreatePage1Module { }
