import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Status } from '../interfaces/Status';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks`);
  }

  getTasksByStatus(status: Status): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks/filter?status=${status}`);
  }

  addTask(body: Task): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/tasks/create`, body);;
  }

  updateTask(id: number, body: Task): Observable<Object> {
    return this.http.put(`${environment.apiUrl}/tasks/update/id/${id}`, body);
  }
}
