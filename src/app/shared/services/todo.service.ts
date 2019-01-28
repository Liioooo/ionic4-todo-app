import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ToDo} from '../models/to-do';
import {NotifictaionsService} from './notifictaions.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    private allToDos: ToDo[] = [];

    constructor(private storage: Storage, private notifications: NotifictaionsService) {
        this.storage.get('toDos').then(data => {
            this.allToDos = data || [];
        });
    }

    public getAllDoing(): ToDo[] {
      return this.allToDos
          .filter(todo => !todo.done && !todo.archive)
          .sort((t1, t2) => t2.priority - t1.priority);
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
        toDo = this.notifications.scheduleNotefications(toDo);
        this.allToDos.push(toDo);
        this.saveToStorage();
    }

    public updateToDo(toDo: ToDo) {
        for (let i = 0; i < this.allToDos.length; i++) {
            if (this.allToDos[i].id === toDo.id) {
                this.notifications.unscheduleNotefications(this.allToDos[i]);
                toDo = this.notifications.scheduleNotefications(toDo);
                this.allToDos[i] = toDo;
                break;
            }
        }
        this.saveToStorage();
    }

    public moveToArchive(id: number) {
        const toDo = this.allToDos.filter(todo => Number(todo.id) === id)[0];
        toDo.archive = true;
        this.notifications.unscheduleNotefications(toDo);
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
        this.allToDos = this.allToDos.filter(todo => {
            if (Number(todo.id) !== Number(id)) {
                return true;
            } else {
                this.notifications.unscheduleNotefications(todo);
                return false;
            }
        });
        this.saveToStorage();
    }

    private saveToStorage() {
        this.storage.set('toDos', this.allToDos);
    }

}
