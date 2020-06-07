import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-exerciseset',
  templateUrl: './exerciseset.component.html',
  styleUrls: ['./exerciseset.component.scss']
})
export class ExercisesetComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ExercisesetComponent>
  ) { }

  ngOnInit() {
  }

}
