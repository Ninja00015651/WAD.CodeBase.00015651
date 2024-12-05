import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { ProgressListComponent } from './progress/progress-list/progress-list.component';
import { WorkoutsListComponent } from './workouts/workouts-list/workouts-list.component';
import { AppComponent } from './app.component';
import { ProgressFormComponent } from './progress/progress-form/progress-form.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'progress', component: ProgressListComponent },
  {path: 'progressForm', component: ProgressFormComponent},
  { path: 'workouts', component: WorkoutsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
