import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../../services/records-service.service'


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  //professorId to query database through api request
  professorId: string = "";
  //hides or shows table
  shown: boolean = false;
  

  //Temporal repository
  public professorsList = [] as any;
  public subjectsList = [] as any;
  public studentsList= [] as any;

  constructor(
    public recordsService: RecordsService
  ) { }

  ngOnInit(): void {
    this.getProfessors()
  }


  ///Database-api operations

  //Get professors
  private getProfessors() {
    this.recordsService.getProfessors()
    .subscribe(resp => {
      this.professorsList= resp
    })
  }

  //Get subjects
  public getSubjects(professorId:any){
    this.recordsService.getSubjects(professorId)
        .subscribe(resp=>{
          this.subjectsList=resp
          console.log(this.subjectsList)
          this.getCoursesLevels(this.subjectsList)
          this.shown=true;
        })
  }

  //Get courses levels
  public getCoursesLevels(subjectsList:any) {
    for (let index = 0; index < subjectsList.length; index++) {
      
      this.recordsService.getCourseById(subjectsList[index].courseId)
          .subscribe(resp=>{
          subjectsList[index]["level"] = resp.level
          })
    }
  }

  //Get students
  public getStudents(courseId:string) {
    this.recordsService.getStudents(courseId)
        .subscribe(resp=>{
          console.log(resp)
        })
  }


  

}
