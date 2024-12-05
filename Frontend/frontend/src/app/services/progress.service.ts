import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private baseUrl = 'http://localhost:5001/api/progress'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  getProgress(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getProgressById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createProgress(progress: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, progress);
  }

  updateProgress(id: number, progress: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, progress);
  }

  deleteProgress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
