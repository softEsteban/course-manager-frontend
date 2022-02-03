import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './modules/school-info/components/course-details/course-details.component';
import { RecordsComponent } from './modules/school-info/components/records/records.component';
import { HomeComponent } from './modules/shared/components/home/home.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "records",
    component: RecordsComponent
  },
  {
    path: "course-details/:courseId",
    component: CourseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
