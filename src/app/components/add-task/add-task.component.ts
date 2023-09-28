import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text: string;
  day: string;
  reminder: boolean = false;

  @Output() onCreateTask: EventEmitter<Task> = new EventEmitter<Task>();

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
