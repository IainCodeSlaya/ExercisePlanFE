import { Component, OnInit } from '@angular/core';
import { Exercisetype } from 'src/app/shared/exercisetype.model';
import { Exercisebodytype } from 'src/app/shared/exercisebodytype.model';
import { ExerciseService } from 'src/app/shared/exercise.service';
import { ExercisetypeService } from 'src/app/shared/exercisetype.service';
import { ExercisebodytypeService } from 'src/app/shared/exercisebodytype.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Exercise } from 'src/app/shared/exercise.model';
import { NgForm } from '@angular/forms';
import { ExercisesetComponent } from '../exerciseset/exerciseset.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  eTypeList: Exercisetype[];
  ebTypeList: Exercisebodytype[];
  eList: Exercise[];
  isValid: Boolean = true;
  sets: number;

  constructor(
    private service: ExerciseService,
    private etService: ExercisetypeService,
    private ebtService: ExercisebodytypeService,
    private dialog: MatDialog) { }

  ngOnInit() {
    // this.etService.getEcerciseTypeList().then(res => this.eTypeList = res as Exercisetype[]);
    // this.ebtService.getEcerciseTypeList().then(res => this.ebTypeList = res as Exercisebodytype[]);
    this.service.getExerciseList().then(res => this.eList = res as Exercise[]);

    this.service.formData = {
      Exercise_ID: null,
      Exercise_Name: '',
      Exercise_Description: '',
      Exercise_Type_ID: 0,
      Exercise_Body_Type_ID: 0,
      // Exercise_Type_Description: '',
      // Exercise_Body_Desc: ''
    };
    this.service.exersisesets = [];
    this.sets = 0;
  }

  AddExercise(ctrl) {
    if (ctrl.selectedIndex === 0) {
      this.service.formData.Exercise_Description = '';
      this.service.formData.Exercise_Type_ID = 0;
      this.service.formData.Exercise_Body_Type_ID = 0;
    } else {
      this.service.formData.Exercise_Description = this.eList[ctrl.selectedIndex - 1].Exercise_Description;
      this.service.formData.Exercise_Body_Type_ID = this.eList[ctrl.selectedIndex - 1].Exercise_Body_Type_ID;
      this.service.formData.Exercise_Type_ID = this.eList[ctrl.selectedIndex - 1].Exercise_Type_ID;
    }
  }

  AddSet(ei, Exercise_ID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "30%";
    dialogConfig.data = { ei, Exercise_ID };
    this.dialog.open(ExercisesetComponent, dialogConfig);
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.Exercise_ID === 0) {
      this.isValid = false;
    }
    return this.isValid;
  }


  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      //this.service.SaveEPDay().subscribe(res => {
      //  this.resetForm();
      // });
    }
  }

}
