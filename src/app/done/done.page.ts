import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/services/todo.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage implements OnInit {

  constructor(public toDos: TodoService) { }

  ngOnInit() {
  }

}
