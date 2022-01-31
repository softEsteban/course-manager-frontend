import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolInfoRoutingModule } from './school-info-routing.module';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './components/records/records.component';


@NgModule({
  declarations: [
    HomeComponent,
    RecordsComponent
  ],
  imports: [
    CommonModule,
    SchoolInfoRoutingModule
  ]
})
export class SchoolInfoModule { }
