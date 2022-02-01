import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../../services/records-service.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  //professorId to query database through api request
  professorId: string = "";
  

  //Temporal repository
  public professorsList = [] as any;
  public subjectsList = [] as any;

  constructor(
    public recordsService: RecordsService,
    private fb: FormBuilder
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
        })
  }


  

}
