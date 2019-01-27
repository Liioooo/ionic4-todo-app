import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ToDo} from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    private doingToDos: ToDo[];
    private archiveToDos: ToDo[];
    private doneToDos: ToDo[];

    constructor(private storage: Storage) {
        this.storage.get('toDosDoing').then(data => {
            this.doingToDos = data || [];
        });
        this.storage.get('toDosDone').then(data => {
            this.doneToDos = data || [];
        });
        this.storage.get('toDosArchive').then(data => {
            this.archiveToDos = data || [];
        });
    }

    public getAllDoing(): ToDo[] {
      return this.doingToDos;
    }

    public getDoingToDo(id: number) {
        return this.doingToDos.filter(item => Number(item.id) === Number(id))[0];
    }

    public addToDo(toDo: ToDo) {
        let highest = 0;
        const [allToDos] = [this.doingToDos, this.doneToDos, this.archiveToDos];
        allToDos.forEach(item => {
            if (item.id > highest) {
                highest = item.id;
            }
        });
        toDo.id = highest + 1;
        this.doingToDos.push(toDo);
        this.saveToStorage();
    }

    public updateToDo(toDo: ToDo) {
        for (let i = 0; i < this.doingToDos.length; i++) {
            if (this.doingToDos[i].id === toDo.id) {
                this.doingToDos[i] = toDo;
            }
        }
        this.saveToStorage();
    }

    public moveToArchive(id: number) {
        for (let i = 0; i < this.doingToDos.length; i++) {
            if (this.doingToDos[i].id === id) {
                this.archiveToDos.push(this.doingToDos[i]);
                this.doingToDos.splice(i, 1);
                break;
            }
        }
        this.saveToStorage();
    }

    public moveToDone(id: number) {
        for (let i = 0; i < this.doingToDos.length; i++) {
            if (this.doingToDos[i].id === id) {
                this.doneToDos.push(this.doingToDos[i]);
                this.doingToDos.splice(i, 1);
                break;
            }
        }
        this.saveToStorage();
    }

    private saveToStorage() {
        this.storage.set('toDosDoing', this.doingToDos);
        this.storage.set('toDosDone', this.doneToDos);
        this.storage.set('toDosArchive', this.archiveToDos);
    }
}
