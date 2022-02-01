import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolInfoRoutingModule } from './school-info-routing.module';
import { RecordsComponent } from './components/records/records.component';


@NgModule({
  declarations: [
    RecordsComponent
  ],
  imports: [
    CommonModule,
    SchoolInfoRoutingModule
  ],
  exports:[]
})
export class SchoolInfoModule { }
