import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllexerciseplansComponent } from './allexerciseplans/allexerciseplans.component';
import { ExerciseplansComponent } from './allexerciseplans/exerciseplans/exerciseplans.component';
import { ExerciseplanComponent } from './allexerciseplans/exerciseplans/exerciseplan/exerciseplan.component';

const routes: Routes = [
  {path: '', redirectTo: 'exerciseplan', pathMatch: 'full'},
  {path: 'allexerciseplans', component: AllexerciseplansComponent},
  {path: 'exerciseplans', children:[
    {path: '', component: ExerciseplansComponent}
  ]},
  {path: 'exerciseplan', children:[
    {path: '', component: ExerciseplanComponent},
    {path: 'edit/:id', component: ExerciseplanComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
