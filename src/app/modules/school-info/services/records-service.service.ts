import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  //Get course by id
  public getCourseById(courseId:string) {
    return this.http.get<any>(`${this.api}/courses/${courseId}`)
  }

  //Get students by course id using filter
  public getStudents(courseId:string) {
    return this.http.get<Array<any>>(`${this.api}/students/?filter[where][courseId]=${courseId}`)
  }

}
