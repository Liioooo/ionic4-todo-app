import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/services/todo.service';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.page.html',
  styleUrls: ['./doing.page.scss'],
})
export class DoingPage implements OnInit {

  constructor(public toDos: TodoService) { }

  ngOnInit() {
  }

}
