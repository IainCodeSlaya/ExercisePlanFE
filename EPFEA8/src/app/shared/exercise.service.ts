import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Exerciseset } from './exerciseset.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  formData: Exercise;
  exersisesets: Exerciseset[];

  constructor(private http: HttpClient) { }

  getExerciseList() {
    return this.http.get(environment.apiURL + '/Exercises').toPromise();
  }
}
