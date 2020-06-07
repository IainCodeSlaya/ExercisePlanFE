import { Component, OnInit } from '@angular/core';
import { ExerciseplanService } from 'src/app/shared/exerciseplan.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';
import { ExerciseplandayComponent } from '../exerciseplanday/exerciseplanday.component';
import { ExerciseplantypeService } from 'src/app/shared/exerciseplantype.service';
import { Exerciseplanday } from 'src/app/shared/exerciseplanday.model';
import { Exerciseplantype } from 'src/app/shared/exerciseplantype.model';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Returnep } from 'src/app/shared/returnep.model';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-exerciseplan',
  templateUrl: './exerciseplan.component.html',
  styleUrls: ['./exerciseplan.component.scss']
})
export class ExerciseplanComponent implements OnInit {
  epTypeList: Exerciseplantype[];
  isValid: Boolean = true;
  eprData: Returnep;

  constructor(
    private service: ExerciseplanService,
    private eptService: ExerciseplantypeService,
    private dialog: MatDialog) { }

  epObj = {
    Exercise_Plan_ID: 0,
    Exercise_Plan_Name: '',
    Exercise_Plan_Type_ID: 0
  };

  returnEpObj = {
    Exercise_Plan_ID: 0,
    Exercise_Plan_Name: '',
    Exercise_Plan_Type_ID: 0,
    EP_Day: [],
    Exercise_Plan_Type: null
  };

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

  AddDay(Exercise_Plan_ID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { Exercise_Plan_ID };

    // let awb = document.getElementById('awb') as HTMLDivElement;
    // awb.hidden = false;
    console.log(Exercise_Plan_ID);

    this.dialog.open(ExerciseplandayComponent, dialogConfig);

    //if()
    // const dialogRef = this.dialog.open(ExerciseplandayComponent, {
    // });
  }

  AddExercise(Exercise_Plan_ID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { Exercise_Plan_ID };
    this.dialog.open(ExerciseComponent, dialogConfig);
    // const dialogRef = this.dialog.open(ExerciseComponent, {
    // });
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.Exercise_Plan_Type_ID === 0) {
      this.isValid = false;
    // } else if (this.service.exerciseplanday.length === 0) {
    //   this.isValid = false;
    } else if (this.service.formData.Exercise_Plan_Name === '') {
      this.isValid = false;
    }
    // this.epObj.Exercise_Plan_ID = this.service.formData.Exercise_Plan_ID;
    this.epObj.Exercise_Plan_Name = this.service.formData.Exercise_Plan_Name;
    this.epObj.Exercise_Plan_Type_ID = this.service.formData.Exercise_Plan_Type_ID;
    return this.isValid;
  }

  disableCreatePlan() {
    let epp = document.getElementById('epp') as HTMLLabelElement;
    let ept = document.getElementById('ept') as HTMLLabelElement;
    let epn = document.getElementById('epn') as HTMLLabelElement;
    let eppi = document.getElementById('eppi') as HTMLInputElement;
    let sept = document.getElementById('sept') as HTMLSelectElement;
    let deppi = document.getElementById('deppi') as HTMLDivElement;
    let iepn = document.getElementById('iepn') as HTMLInputElement;
    let epidl = document.getElementById('epidl') as HTMLInputElement;
    let cepb = document.getElementById('cepb') as HTMLDivElement;
    let adb = document.getElementById('adb') as HTMLDivElement;
    let tday = document.getElementById('tday') as HTMLTableElement;
    epp.hidden = true;
    ept.hidden = true;
    epn.hidden = true;
    eppi.hidden = true;
    eppi.disabled = true;
    deppi.hidden = true;
    sept.disabled = true;
    sept.hidden = true;
    iepn.disabled = true;
    iepn.hidden = true;
    epidl.hidden = false;
    cepb.hidden = true;
    adb.hidden = false;
    tday.hidden = false;
    this.service.formData.Exercise_Plan_ID = this.eprData.Exercise_Plan_ID;
  }

  createPlan() {
    console.log(this.service.formData);
    if (this.validateForm()) {
        this.service.SaveEP(this.epObj).subscribe(res => {
          this.eprData = res as Returnep;
          this.disableCreatePlan();
        });
    }
  }
}

// console.log("1q");
        // console.log(this.epTypeList);
        // console.log('iain1', this.re);
        // this.service.SaveEPDay(this.epObj).subscribe(res => {
        //   console.log("2q");
        //   // this.resetForm();
        //   this.disableCreatePlan();
        //   this.returnEpObj = res;
        //   console.log('hi bro', this.returnEpObj);
        // });

        // onSubmit(form: NgForm) {
  //   if (this.validateForm()) {
  //     this.service.SaveEPDay().subscribe(res => {
  //       //this.resetForm();
  //       this.createPlan();
  //       console.log(res);
  //     });
  //   }
  // }
