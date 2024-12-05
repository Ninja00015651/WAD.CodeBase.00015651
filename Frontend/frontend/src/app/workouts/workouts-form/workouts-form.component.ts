import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from '../../services/workout.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workouts-form',
  templateUrl: './workouts-form.component.html',
  styleUrls: ['./workouts-form.component.scss'],
  imports:[
    FormsModule
  ]
})
export class WorkoutsFormComponent implements OnInit {
  workout: any = { userId: 0, date: '', type: '', duration: 0, caloriesBurned: 0 };
  isEditMode = false;

  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.workoutService.getWorkoutById(+id).subscribe(data => (this.workout = data));
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.workoutService.updateWorkout(this.workout.workoutId, this.workout).subscribe(() => {
        this.router.navigate(['/workouts']);
      });
    } else {
      this.workoutService.createWorkout(this.workout).subscribe(() => {
        this.router.navigate(['/workouts']);
      });
    }
  }
}
