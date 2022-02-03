import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordsService } from '../../services/records-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {


  constructor(
    private _Activatedroute: ActivatedRoute,
    public recordsService: RecordsService
  ) { }

  ngOnInit(): void {
    this.getStudentsByCourseId()
  }

  //Get passed parameter and get students
  public getStudentsByCourseId () {
    this._Activatedroute.paramMap.subscribe(params => {
      console.log(typeof params.get('id'))
    })
  }




}
