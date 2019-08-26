import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllexerciseplansComponent } from './allexerciseplans/allexerciseplans.component';
import { ExerciseplansComponent } from './allexerciseplans/exerciseplans/exerciseplans.component';
import { ExerciseplanComponent } from './allexerciseplans/exerciseplans/exerciseplan/exerciseplan.component';
import { ExerciseplantypeComponent } from './allexerciseplans/exerciseplans/exerciseplantype/exerciseplantype.component';
import { ExerciseplandayComponent } from './allexerciseplans/exerciseplans/exerciseplanday/exerciseplanday.component';
import { DayComponent } from './allexerciseplans/exerciseplans/day/day.component';
import { WorkoutComponent } from './allexerciseplans/exerciseplans/workout/workout.component';
import { WorkoutsetComponent } from './allexerciseplans/exerciseplans/workoutset/workoutset.component';
import { ExercisesetComponent } from './allexerciseplans/exerciseplans/exerciseset/exerciseset.component';
import { SetComponent } from './allexerciseplans/exerciseplans/set/set.component';
import { ExerciseComponent } from './allexerciseplans/exerciseplans/exercise/exercise.component';
import { ExercisebodytypeComponent } from './allexerciseplans/exerciseplans/exercisebodytype/exercisebodytype.component';
import { ExercisetypeComponent } from './allexerciseplans/exerciseplans/exercisetype/exercisetype.component';
import { DayworkoutComponent } from './allexerciseplans/exerciseplans/dayworkout/dayworkout.component';
import { ExerciseplanService } from './shared/exerciseplan.service';

@NgModule({
  declarations: [
    AppComponent,
    AllexerciseplansComponent,
    ExerciseplansComponent,
    ExerciseplanComponent,
    ExerciseplantypeComponent,
    ExerciseplandayComponent,
    DayComponent,
    WorkoutComponent,
    WorkoutsetComponent,
    ExercisesetComponent,
    SetComponent,
    ExerciseComponent,
    ExercisebodytypeComponent,
    ExercisetypeComponent,
    DayworkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [ExerciseplandayComponent, DayworkoutComponent, ExerciseComponent, ExercisesetComponent],
  providers: [ExerciseplanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
