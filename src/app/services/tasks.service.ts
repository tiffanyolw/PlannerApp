import { Injectable } from '@angular/core';
import { Status, Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  todoList: Task[] = [
    { id: 1, name: "Running", description: "running around the block", startDate: new Date(), endDate: new Date(), status: Status.Incomplete },
    { id: 2, name: "Running2", description: "running around the block2", startDate: new Date(), endDate: new Date(), status: Status.Incomplete },
    { id: 3, name: "Running3", description: "running around the block3", startDate: new Date(), endDate: new Date(), status: Status.Complete },
  ];

  constructor() { }

  getTasks(): Task[] {
    return this.todoList;
  }

  addTask(task: Task): boolean {
    this.todoList.push(task);
    return true;
    // return false if db couldn't add
  }
}
