import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from '../../Task'
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription:Subscription;
  @Output() onCreateTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private uiService:UiService) {
    this.subscription=uiService.onToggle().subscribe((value)=>this.showAddTask=value);
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const task: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };
    this.onCreateTask.emit(task);
    this.day='';
    this.reminder=false;
    this.text='';
  }
}
