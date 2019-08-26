import { Component, OnInit } from '@angular/core';
import { ExerciseplanService } from 'src/app/shared/exerciseplan.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';
import { ExerciseplandayComponent } from '../exerciseplanday/exerciseplanday.component';
import { ExerciseplantypeService } from 'src/app/shared/exerciseplantype.service';
import { Exerciseplanday } from 'src/app/shared/exerciseplanday.model';
import { Exerciseplantype } from 'src/app/shared/exerciseplantype.model';

@Component({
  selector: 'app-exerciseplan',
  templateUrl: './exerciseplan.component.html',
  styleUrls: ['./exerciseplan.component.scss']
})
export class ExerciseplanComponent implements OnInit {
  epTypeList: Exerciseplantype[];
  isValid: Boolean = true;

  constructor(
    private service: ExerciseplanService,
    private eptService: ExerciseplantypeService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.eptService.getPlanTypeList().then(res => this.epTypeList = res as Exerciseplantype[]);
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

  updatePrice(ctrl) {
    if (ctrl.selectedIndex === 0) {
      this.service.formData.Plan_Type_Price = 0;
    } else {
      this.service.formData.Plan_Type_Price = this.epTypeList[ctrl.selectedIndex - 1].Plan_Type_Price;
    }
  }

  AddDay(epdayi, Exercise_Plan_ID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "25%";
    dialogConfig.data = { epdayi, Exercise_Plan_ID };
    this.dialog.open(ExerciseplandayComponent, dialogConfig);
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.Exercise_Plan_Type_ID === 0) {
      this.isValid = false;
    } else if (this.service.exerciseplanday.length === 0) {
      this.isValid = false;
    } else if (this.service.formData.Exercise_Plan_Name === '') {
      this.isValid = false;
    }
    return this.isValid;
  }


  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.service.SaveEPDay().subscribe(res => {
        this.resetForm();
      });
    }
  }

}
