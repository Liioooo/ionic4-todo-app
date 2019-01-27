import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ToDo} from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    private allToDos: ToDo[] = [];

    constructor(private storage: Storage) {
        this.storage.get('toDos').then(data => {
            this.allToDos = data || [];
        });
    }

    public getAllDoing(): ToDo[] {
      return this.allToDos.filter(todo => !todo.done && !todo.archive);
    }

    public getAllDone(): ToDo[] {
        return this.allToDos.filter(todo => todo.done && !todo.archive);
    }

    public getAllArchive(): ToDo[] {
        return this.allToDos.filter(todo => todo.archive);
    }

    public getToDo(id: number) {
        return this.allToDos.filter(item => Number(item.id) === Number(id))[0];
    }

    public addToDo(toDo: ToDo) {
        let highest = 0;
        this.allToDos.forEach(item => {
            if (item.id > highest) {
                highest = item.id;
            }
        });
        toDo.id = highest + 1;
        toDo.done = false;
        toDo.archive = false;
        this.allToDos.push(toDo);
        this.saveToStorage();
    }

    public updateToDo(toDo: ToDo) {
        this.allToDos.filter(item => Number(item.id) === toDo.id)[0] = toDo;
        this.saveToStorage();
    }

    public moveToArchive(id: number) {
        this.allToDos.filter(todo => Number(todo.id) === id)[0].archive = true;
        this.saveToStorage();
    }

    public removeFromArchive(id: number) {
        this.allToDos.filter(todo => Number(todo.id) === id)[0].archive = false;
        this.saveToStorage();
    }

    public moveToDone(id: number) {
        this.allToDos.filter(todo => Number(todo.id) === id)[0].done = true;
        this.saveToStorage();
    }

    public moveToDoing(id: number) {
        this.allToDos.filter(todo => Number(todo.id) === id)[0].done = false;
        this.saveToStorage();
    }

    public delete(id: number) {
        this.allToDos = this.allToDos.filter(todo => Number(todo.id) !== Number(id));
        this.saveToStorage();
    }

    private saveToStorage() {
        this.storage.set('toDos', this.allToDos);
    }

}
