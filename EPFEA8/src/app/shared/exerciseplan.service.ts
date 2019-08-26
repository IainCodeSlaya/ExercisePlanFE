import { Injectable } from '@angular/core';
import { Exerciseplan } from './exerciseplan.model';
import { Exerciseplanday } from './exerciseplanday.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseplanService {
  formData: Exerciseplan;
  exerciseplanday: Exerciseplanday[];

  constructor() { }
}
