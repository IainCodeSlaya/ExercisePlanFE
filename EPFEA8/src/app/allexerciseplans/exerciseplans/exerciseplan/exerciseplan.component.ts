import { Component, OnInit } from '@angular/core';
import { ExerciseplanService } from 'src/app/shared/exerciseplan.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';
import { ExerciseplandayComponent } from '../exerciseplanday/exerciseplanday.component';

@Component({
  selector: 'app-exerciseplan',
  templateUrl: './exerciseplan.component.html',
  styleUrls: ['./exerciseplan.component.scss']
})
export class ExerciseplanComponent implements OnInit {

  constructor(private service: ExerciseplanService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    // tslint:disable-next-line: no-conditional-assignment
    if (form = null) {
      form.resetForm();
    }
    this.service.formData = {
      Exercise_Plan_ID: null,
      Exercise_Plan_Name: '',
      Exercise_Plan_Type_ID: 0,
      Plan_Type_Description: '',
      Plan_Type_Price: 0
    };
    this.service.exerciseplanday = [];
  }

  AddDay(epdayi, Exercise_Plan_ID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "25%";
    dialogConfig.data = { epdayi, Exercise_Plan_ID };
    this.dialog.open(ExerciseplandayComponent, dialogConfig);
  }

}
