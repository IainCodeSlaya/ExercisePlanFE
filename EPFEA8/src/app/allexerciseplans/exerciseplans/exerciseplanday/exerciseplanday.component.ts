import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Exerciseplanday } from 'src/app/shared/exerciseplanday.model';
import { Day } from 'src/app/shared/day.model';
import { DayService } from 'src/app/shared/day.service';
import { ExerciseplanService } from 'src/app/shared/exerciseplan.service';

@Component({
  selector: 'app-exerciseplanday',
  templateUrl: './exerciseplanday.component.html',
  styleUrls: ['./exerciseplanday.component.scss']
})
export class ExerciseplandayComponent implements OnInit {
  formData: Exerciseplanday;
  dayList: Day[];
  isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ExerciseplandayComponent>,
    private dService: DayService,
    private epService: ExerciseplanService) { }

  ngOnInit() {
    this.formData = {
      Exercise_Plan_Day_ID: null,
      Exercise_Plan_ID: this.data.Exercise_Plan_ID,
      Day_ID: 0
    };
  }

}
