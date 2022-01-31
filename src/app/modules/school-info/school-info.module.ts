import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolInfoRoutingModule } from './school-info-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SchoolInfoRoutingModule
  ]
})
export class SchoolInfoModule { }
