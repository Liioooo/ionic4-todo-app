import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ToDo} from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    private allToDos: ToDo[];

    constructor(private storage: Storage) {
        this.storage.get('toDos').then(data => {
            this.allToDos = data || [];
        });
    }

    public getAllToDos(): ToDo[] {
      return this.allToDos;
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
        this.allToDos.push(toDo);
        this.saveToStorage();
    }

    public updateToDo(toDo: ToDo) {
        for (let i = 0; i < this.allToDos.length; i++) {
            if (this.allToDos[i].id === toDo.id) {
                this.allToDos[i] = toDo;
            }
        }
        this.saveToStorage();
    }

    public delete(id: number) {
        this.allToDos = this.allToDos.filter(item => Number(item.id) !== id);
        this.saveToStorage();
    }

    private saveToStorage() {
        this.storage.set('toDos', this.allToDos);
    }
}
