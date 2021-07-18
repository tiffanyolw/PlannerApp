import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plan } from 'src/app/interfaces/plan';

@Component({
  selector: 'app-add-plan-form',
  templateUrl: './add-plan-form.component.html',
  styleUrls: ['./add-plan-form.component.scss'],
})
export class AddPlanFormComponent implements OnInit {
  addPlanForm: FormGroup;
  @Output() sendForm: EventEmitter<Plan>;

  constructor(private builder: FormBuilder) {
    this.addPlanForm = this.builder.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      startTime: ["", [Validators.required]],
      endDate: [""],
      endTime: [""],
      status: ["Incomplete", [Validators.required]]
    });

    this.sendForm = new EventEmitter();
  }

  private convertDateTime(date: Date, time: Date): Date {
    let dateTime = new Date(date);
    const temp = new Date(time);
    const hours = temp.getHours();
    const minutes = temp.getMinutes();
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);

    return dateTime;
  }

  onSubmit() {
    const form = this.addPlanForm.value;
    const newPlan: Plan = {
      name: form.name,
      description: form.description,
      startDate: this.convertDateTime(form.startDate, form.startTime),
      endDate: this.convertDateTime(form.endDate, form.endTime),
      status: form.status
    };

    this.sendForm.emit(newPlan);
    this.addPlanForm.reset();
  }

  ngOnInit() { }

}
