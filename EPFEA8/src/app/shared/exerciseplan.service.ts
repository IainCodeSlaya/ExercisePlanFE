import { Injectable } from '@angular/core';
import { Exerciseplan } from './exerciseplan.model';
import { Exerciseplanday } from './exerciseplanday.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Day } from './day.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseplanService {
  formData: Exerciseplan;
  formDataDay: Exerciseplanday;
  exerciseplanday: Exerciseplanday[];

  constructor(private http: HttpClient) { }

  getDayList() {
    return this.http.get(environment.apiURL + '/Days').toPromise();
  }

  SaveEP(epObj) {
    return this.http.post(environment.apiURL + '/ExercisePlan', epObj);
  }

  SaveEPD(epdObj) {
    return this.http.post(environment.apiURL + '/EPDay', epdObj);
  }

}

// var body = {
    //   ...this.formData // ,
    //   // Exercise_Plan_Day: this.exerciseplanday
    // };
    // console.log(this.formData);
