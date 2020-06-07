import { Component, OnInit, Inject, ɵsetCurrentInjector } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Exerciseplanday } from 'src/app/shared/exerciseplanday.model';
import { Day } from 'src/app/shared/day.model';
import { DayService } from 'src/app/shared/day.service';
import { ExerciseplanService } from 'src/app/shared/exerciseplan.service';
import { NgForm } from '@angular/forms';
import { DayworkoutComponent } from '../dayworkout/dayworkout.component';
import { Returnepday } from 'src/app/shared/returnepday.model';

@Component({
  selector: 'app-exerciseplanday',
  templateUrl: './exerciseplanday.component.html',
  styleUrls: ['./exerciseplanday.component.scss']
})
export class ExerciseplandayComponent implements OnInit {
  isValid: boolean = true;
  currentWorkouts: number;
  dayList: Day[];
  epdayt: Returnepday;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ExerciseplandayComponent>,
    private dService: DayService,
    private epService: ExerciseplanService,
    private dialog: MatDialog) { }

    epdObj = {
      EP_Day_ID: 0,
      Exercise_Plan_ID: 0,
      Day_ID: 0
    };

  ngOnInit() {

    this.epService.getDayList().then(res => this.dayList = res as Day[]);

    this.currentWorkouts = 0;

    this.epService.formDataDay = {
      Exercise_Plan_Day_ID: null,
      Exercise_Plan_ID: this.data.Exercise_Plan_ID,
      Day_ID: 0,
      Day_Type: ''
    };
  }

  AddDay(ctrl) {
    if (ctrl.selectedIndex === 0) {
      this.epService.formDataDay.Day_Type = '';
      this.epService.formDataDay.Day_ID = 0;
    } else {
      this.epService.formDataDay.Day_Type = this.dayList[ctrl.selectedIndex - 1].Day_Type;
      this.epService.formDataDay.Day_ID = this.dayList[ctrl.selectedIndex - 1].Day_ID;
    }
    // console.log(this.epService.formDataDay);
  }

  AddID() {
    this.epService.formDataDay.Exercise_Plan_Day_ID = this.epdayt.EP_Day_ID;
    this.epService.exerciseplanday.push(this.epService.formDataDay);
    // console.log(this.epService.formDataDay.Exercise_Plan_Day_ID, 'iaiiiiiiin');
    console.log(this.epService.exerciseplanday);
  }

  // AddWorkout(dayi, Exercise_Plan_Day_ID) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.disableClose = true;
  //   dialogConfig.width = "50%";
  //   dialogConfig.data = { dayi, Exercise_Plan_Day_ID };
  //   this.dialog.open(DayworkoutComponent, dialogConfig);
  // }

  onSub(form: NgForm) {
    if (this.validateForm(this.epService.formDataDay)) {
      this.epService.SaveEPD(this.epdObj).subscribe(res => {
        this.epdayt = res as Returnepday;
        this.AddID();
      });
      this.dialogRef.close();
    }
  }

  validateForm(formData: Exerciseplanday) {
    this.isValid = true;
    if (formData.Day_ID === 0) {
      this.isValid = false;
    }
    this.epdObj.Day_ID = this.epService.formDataDay.Day_ID;
    this.epdObj.Exercise_Plan_ID = this.epService.formDataDay.Exercise_Plan_ID;
    return this.isValid;
  }
}
