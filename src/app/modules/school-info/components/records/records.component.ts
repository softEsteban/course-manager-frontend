import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../../services/records-service.service'

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  //Temporal repository
  public professorsList = [] as any;

  constructor(
    public recordsService: RecordsService
  ) { }

  ngOnInit(): void {
    this.getProfessors()
  }

  //Get professors
  private getProfessors() {
    this.recordsService.getProfessors()
    .subscribe(resp => {
      this.professorsList= resp
    })
  }

}
