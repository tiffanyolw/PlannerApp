import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Task } from 'src/app/interfaces/task';
import { Status } from 'src/app/interfaces/Status';
import { TasksService } from 'src/app/services/Tasks.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  title: String = "To Do";

  todoList: Task[] = [];

  constructor(private service: TasksService, private toastCtrl: ToastController) {
    this.todoList = service.getTasks();
  }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  isCompleted(todo: Task): boolean {
    return todo.status === Status.Complete;
  }
  
  toggleStatus(todo: Task) {
    let msg = "";
    if (todo.status === Status.Complete) {
      todo.status = Status.Incomplete;
      msg = "Task has been marked as incomplete.";;
    } else {
      todo.status = Status.Complete;
      msg = "Task has been marked as complete.";
    }

    this.showToast(msg);
  }

  ngOnInit() { }

}