import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private apiService: ApiService) { }

  // get all
  list(): Observable<[Student]> {
    return this.apiService.get<[Student]>(this.apiService.apiUrl.student);
  }
  get(id): Observable<Student> {
    return this.apiService.get<Student>(`${this.apiService.apiUrl.student}/${id}`);
  }
  delete(id): Observable<[Student]> {
    return this.apiService.delete<[Student]>(`${this.apiService.apiUrl.student}/${id}`);
  }
  save(data: Student): Observable<[Student]> {
    if (data._id === "0") {
      return this.apiService.post<[Student]>(this.apiService.apiUrl.student, data);
    } else {
      return this.apiService.put<[Student]>(`${this.apiService.apiUrl.student}/${data._id}`, data);
    }
  }
}
