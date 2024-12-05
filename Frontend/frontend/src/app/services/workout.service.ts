import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private baseUrl = 'http://localhost:5001/api/workouts'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getWorkoutById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createWorkout(workout: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, workout);
  }

  updateWorkout(id: number, workout: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, workout);
  }

  deleteWorkout(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
