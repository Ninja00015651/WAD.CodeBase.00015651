import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-workouts-list',
  templateUrl: './workouts-list.component.html',
  styleUrls: ['./workouts-list.component.scss'],
  imports:[CommonModule]
})
export class WorkoutsListComponent implements OnInit {
  workouts: any[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.loadWorkouts();
  }

  loadWorkouts(): void {
    this.workoutService.getWorkouts().subscribe(data => {
      this.workouts = data;
    });
  }

  editWorkout(id: number): void {
    // Implement navigation to the workout form with ID
  }

  deleteWorkout(id: number): void {
    this.workoutService.deleteWorkout(id).subscribe(() => {
      this.loadWorkouts(); // Reload workouts after deletion
    });
  }
}
