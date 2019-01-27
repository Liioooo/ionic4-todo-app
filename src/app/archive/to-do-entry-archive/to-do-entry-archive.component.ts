import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from '../../shared/models/to-do';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-to-do-entry-archive',
  templateUrl: './to-do-entry-archive.component.html',
  styleUrls: ['./to-do-entry-archive.component.scss']
})
export class ToDoEntryArchiveComponent implements OnInit {

    @Input()
    toDo: ToDo;

    @Output()
    removeFromArchive = new EventEmitter<number>();

    @Output()
    deletedItem = new EventEmitter<number>();

    public isChecked: boolean;

    constructor(private alert: AlertController) { }

    ngOnInit() {
        this.isChecked = true;
    }

    public removedFromArchive() {
        this.removeFromArchive.emit(this.toDo.id);
    }

    public delete() {
        this.showDeleteAlert().then(confirmed => {
            if (confirmed) {
                this.deletedItem.emit(this.toDo.id);
            }
        });
    }

    private async showDeleteAlert() {
        let confirmed = false;
        const alert = await this.alert.create({
            header: 'Delete To-Do',
            message: `Do you really want to delete <strong>${this.toDo.title}</strong>`,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => confirmed = false
                },
                {
                    text: 'Yes',
                    handler: () => confirmed = true
                }
            ]
        });
        await alert.present();
        await alert.onDidDismiss();
        return confirmed;
    }

}
