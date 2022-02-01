import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from 'src/app/modules/school-info/models/Professor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private api = environment.host;

  constructor(
    private http: HttpClient
  ) { }

  //Get all professors
  public getProfessors () {
    return this.http.get<Array<any>>(`${this.api}/professors`)
  }

  //Get subjects by professor id
  public getSubjects(professorId:string){
    return this.http.get<Array<any>>(`${this.api}/professors/${professorId}/subjects`)
  }


}
