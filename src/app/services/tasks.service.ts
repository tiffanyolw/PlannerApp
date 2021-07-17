import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Status } from '../interfaces/Status';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  todoList: Task[] = [
    { name: "Running", description: "running around the block", startDate: new Date(), endDate: new Date(), status: Status.Incomplete },
    { name: "Running2", description: "running around the block2", startDate: new Date(), endDate: new Date(), status: Status.Incomplete },
    { name: "Running3", description: "running around the block3", startDate: new Date(), endDate: new Date(), status: Status.Complete },
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
