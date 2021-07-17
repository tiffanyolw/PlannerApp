import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage implements OnInit {
  title: string = "Add Goal";

  constructor() { }

  ngOnInit() {
  }

}
