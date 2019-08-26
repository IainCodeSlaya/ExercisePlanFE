import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseplantypeService {

  constructor(private http: HttpClient) { }

  getPlanTypeList() {
    return this.http.get(environment.apiURL + '/ExercisePlanType').toPromise();
  }
}
