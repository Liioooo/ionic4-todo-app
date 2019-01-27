import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from '../../shared/models/to-do';
import {timer} from 'rxjs';

@Component({
  selector: 'app-to-do-entry-doing',
  templateUrl: './to-do-entry-doing.component.html',
  styleUrls: ['./to-do-entry-doing.component.scss']
})
export class ToDoEntryDoingComponent implements OnInit {

    @Input()
    toDo: ToDo;

    @Output()
    archiveItem = new EventEmitter<number>();

    @Output()
    movedToDone = new EventEmitter<number>();

    public isChecked: boolean;

    constructor() { }

    ngOnInit() {
    }

    public movedToArchive() {
      this.archiveItem.emit(this.toDo.id);
    }

    public checkedChanged() {
      if (this.isChecked) {
        timer(600).subscribe(() => this.movedToDone.emit(this.toDo.id));
      }
    }

}
