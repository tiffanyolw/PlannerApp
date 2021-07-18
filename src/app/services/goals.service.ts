import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Goal } from '../interfaces/goal';
import { Status } from '../interfaces/plan';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private http: HttpClient) { }

  getGoals(orderby?: string, order?: string): Observable<Goal[]> {
    const orderQuery1 = orderby ? `?orderby=${orderby}` : "";
    const orderQuery2 = order ? `&order=${order}` : "";
    const orderQuery = orderby ? orderQuery1 + orderQuery2 : "";

    return this.http.get<Goal[]>(`${environment.apiUrl}/goals${orderQuery}`);
  }

  getGoalsByStatus(status: Status, orderby?: string, order?:string): Observable<Goal[]> {
    const orderQuery1 = orderby ? `&orderby=${orderby}` : "";
    const orderQuery2 = order ? `&order=${order}` : "";
    const orderQuery = orderby ? orderQuery1 + orderQuery2 : "";

    return this.http.get<Goal[]>(`${environment.apiUrl}/goals/filter?status=${status}${orderQuery}`);
  }

  addGoal(body: Goal): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/goals/create`, body);
  }

  updateGoal(id: number, body: Goal) {
    return this.http.put(`${environment.apiUrl}/goals/update/id/${id}`, body);
  }
}
