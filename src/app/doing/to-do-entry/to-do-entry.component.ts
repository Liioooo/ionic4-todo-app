import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from '../../shared/models/to-do';

@Component({
  selector: 'app-to-do-entry',
  templateUrl: './to-do-entry.component.html',
  styleUrls: ['./to-do-entry.component.scss']
})
export class ToDoEntryComponent implements OnInit {

  @Input()
  toDo: ToDo;

  @Output()
  deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public delete() {
    this.deleteItem.emit(this.toDo.id);
  }

}
