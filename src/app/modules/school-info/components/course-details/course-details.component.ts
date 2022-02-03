import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordsService } from '../../services/records-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  //Temporal repository
  public studentsList= [] as any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    public recordsService: RecordsService
  ) { }

  ngOnInit(): void {
    this.getStudentsByCourseId()
    this.getCourseInfo()
  }

  //Get passed parameter and get students
  public getStudentsByCourseId () {
    this._Activatedroute.paramMap.subscribe(params => {
      // console.log(typeof params.get('id'))
      // console.log(JSON.stringify(params))
      // console.log(typeof params.get('courseId'));
      this.recordsService.getStudents(params.get('courseId') as string)
          .subscribe(resp => {
            this.studentsList= resp
          })  
    })
  }

  //Get course level and print it to DOM
  public getCourseInfo () {
    this._Activatedroute.paramMap.subscribe(params => {

      this.recordsService.getCourseById(params.get('courseId') as string)
          .subscribe(resp => {

            const output = document.getElementById('spancito-1');
            if(output) output.innerHTML = ` - ${resp['level']}`
            const output1 = document.getElementById('spancito-2');
            if(output1) output1.innerHTML = ` - ${resp['classroom']}` 

          })  
    })
  }




}
