import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/services/todo.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.page.html',
  styleUrls: ['./archive.page.scss'],
})
export class ArchivePage implements OnInit {

  constructor(public toDos: TodoService) { }

  ngOnInit() {
  }

}
