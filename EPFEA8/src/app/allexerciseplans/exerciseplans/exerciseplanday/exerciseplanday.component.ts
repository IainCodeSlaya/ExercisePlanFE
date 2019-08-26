import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Exerciseplanday } from 'src/app/shared/exerciseplanday.model';
import { Day } from 'src/app/shared/day.model';
import { DayService } from 'src/app/shared/day.service';
import { ExerciseplanService } from 'src/app/shared/exerciseplan.service';
import { NgForm } from '@angular/forms';
import { DayworkoutComponent } from '../dayworkout/dayworkout.component';

@Component({
  selector: 'app-exerciseplanday',
  templateUrl: './exerciseplanday.component.html',
  styleUrls: ['./exerciseplanday.component.scss']
})
export class ExerciseplandayComponent implements OnInit {
  formData: Exerciseplanday;
  dayList: Day[];
  isValid: boolean = true;
  currentWorkouts: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ExerciseplandayComponent>,
    private dService: DayService,
    private epService: ExerciseplanService,
    private dialog: MatDialog) { }

  ngOnInit() {

    this.dService.getDayList().then(res => this.dayList = res as Day[]);

    this.currentWorkouts = 0;

    this.formData = {
      Exercise_Plan_Day_ID: null,
      Exercise_Plan_ID: this.data.Exercise_Plan_ID,
      Day_ID: 0,
      Day_Type: ''
    };
  }
0
  AddDay(ctrl) {
    if (ctrl.selectedIndex === 0) {
      this.formData.Day_Type = '';
    } else {
      this.formData.Day_Type = this.dayList[ctrl.selectedIndex - 1].Day_Type;
    }
  }

  AddWorkout(dayi, Exercise_Plan_Day_ID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { dayi, Exercise_Plan_Day_ID };
    this.dialog.open(DayworkoutComponent, dialogConfig);
  }

  onSub(form: NgForm) {
    if (this.validateForm(this.formData)) {
      this.epService.exerciseplanday.push(this.formData);
      this.dialogRef.close();
    }
  }

  validateForm(formData: Exerciseplanday) {
    this.isValid = true;
    if (formData.Day_ID === 0) {
      this.isValid = false;
    }
    return this.isValid;
  }

}
