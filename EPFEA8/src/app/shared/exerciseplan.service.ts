import { Injectable } from '@angular/core';
import { Exerciseplan } from './exerciseplan.model';
import { Exerciseplanday } from './exerciseplanday.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseplanService {
  formData: Exerciseplan;
  exerciseplanday: Exerciseplanday[];

  constructor(private http: HttpClient) { }

  SaveEPDay() {
    var body = {
      ...this.formData,
      Exercise_Plan_Day: this.exerciseplanday
    };
    return this.http.post(environment.apiURL + '/ExercisePlan', body);
  }
}
