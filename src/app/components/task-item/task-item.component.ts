import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Task} from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input("task") task:Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter<Task>();

  faTimes = faTimes;
  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task){
    this.onToggleReminder.emit(task);
  }
}
