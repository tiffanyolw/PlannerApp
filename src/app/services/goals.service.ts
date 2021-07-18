import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Goal } from '../interfaces/goal';
import { Status } from '../interfaces/Status';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private http: HttpClient) { }

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${environment.apiUrl}/goals`);
  }

  getGoalsByStatus(status: Status): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${environment.apiUrl}/goals/filter?status=${status}`);
  }

  addGoal(body: Goal): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/goals/create`, body);
  }

  updateGoal(id: number, body: Goal) {
    return this.http.put(`${environment.apiUrl}/goals/update/id/${id}`, body);
  }
}
