import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolInfoRoutingModule } from './school-info-routing.module';
import { RecordsComponent } from './components/records/records.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';


@NgModule({
  declarations: [
    RecordsComponent,
    CourseDetailsComponent,
  ],
  imports: [
    CommonModule,
    SchoolInfoRoutingModule
  ],
  exports:[]
})
export class SchoolInfoModule { }
