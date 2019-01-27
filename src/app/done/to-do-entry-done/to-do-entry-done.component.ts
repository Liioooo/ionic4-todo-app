import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from '../../shared/models/to-do';
import {timer} from 'rxjs';

@Component({
  selector: 'app-to-do-entry-done',
  templateUrl: './to-do-entry-done.component.html',
  styleUrls: ['./to-do-entry-done.component.scss']
})
export class ToDoEntryDoneComponent implements OnInit {

    @Input()
    toDo: ToDo;

    @Output()
    archiveItem = new EventEmitter<number>();

    @Output()
    movedToDoing = new EventEmitter<number>();

    public isChecked: boolean;

    constructor() { }

    ngOnInit() {
      this.isChecked = true;
    }

    public moveToArchive() {
        this.archiveItem.emit(this.toDo.id);
    }

    public checkedChanged() {
        if (!this.isChecked) {
            timer(600).subscribe(() => this.movedToDoing.emit(this.toDo.id));
        }
    }
}
