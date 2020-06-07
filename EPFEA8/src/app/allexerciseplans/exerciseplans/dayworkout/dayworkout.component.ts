import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { Dayworkout } from 'src/app/shared/dayworkout.model';
import { Workout } from 'src/app/shared/workout.model';
import { WorkoutService } from 'src/app/shared/workout.service';
import { ExerciseplanService } from 'src/app/shared/exerciseplan.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dayworkout',
  templateUrl: './dayworkout.component.html',
  styleUrls: ['./dayworkout.component.scss']
})
export class DayworkoutComponent implements OnInit {
  formData: Dayworkout;
  workoutList: Workout[];
  isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DayworkoutComponent>,
    private wService: WorkoutService,
    private epService: ExerciseplanService,
    // private dialog: MatDialog
    ) { }

  ngOnInit() {

    this.wService.getWorkoutList().then(res => this.workoutList = res as Workout[]);

    this.formData = {
      Day_Workout_ID: null,
      Workout_Set_ID: 0,
      Exercise_Plan_Day_ID: this.data.Exercise_Plan_Day_ID
    };
  }


  /*AddWorkout(ctrl) {
    if (ctrl.selectedIndex === 0) {
      this.formData.Day_Type = '';
    } else {
      this.formData.Day_Type = this.dayList[ctrl.selectedIndex - 1].Day_Type;
    }
  }*/

  // AddWorkout(dayi, Exercise_Plan_Day_ID) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.disableClose = true;
  //   dialogConfig.width = "50%";
  //   dialogConfig.data = { dayi, Exercise_Plan_Day_ID };
  //   this.dialog.open(DayworkoutComponent, dialogConfig);
  // }

  /*onSub(form: NgForm) {
    if (this.validateForm(this.formData)) {
      this.epService.exerciseplanday.push(this.formData);
      this.dialogRef.close();
    }
  }

  validateForm(formData: Dayworkout) {
    this.isValid = true;
    if (formData.wo === 0) {
      this.isValid = false;
    }
    return this.isValid;
  }*/

}
