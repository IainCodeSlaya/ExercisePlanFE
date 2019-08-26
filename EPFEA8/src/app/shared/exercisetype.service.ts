import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExercisetypeService {

  constructor(private http: HttpClient) { }

  getEcerciseTypeList() {
    return this.http.get(environment.apiURL + '/ExerciseType').toPromise();
  }
}
