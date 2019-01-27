import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../shared/services/todo.service';
import {ToDo} from '../shared/models/to-do';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.page.html',
  styleUrls: ['./edit-to-do.page.scss'],
})
export class EditToDoPage implements OnInit {

    private paramSubscription: Subscription;
    private titleBarText = 'Edit ToDo';
    public editToDoForm: FormGroup;
    private currentId: string;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private toDoService: TodoService, private router: Router) { }

    ngOnInit() {
        this.editToDoForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            priority: ['']
        });
    }

    ionViewWillEnter() {
        this.paramSubscription = this.route.params.subscribe(params => {
            if (params['id'] === 'new') {
                this.titleBarText = 'Add ToDo';
                this.editToDoForm.controls.priority.setValue(5);
                this.editToDoForm.controls.title.setValue('');
                this.editToDoForm.controls.description.setValue('');
            } else {
                const toDo = this.toDoService.getDoingToDo(params['id']);
                this.editToDoForm.controls.priority.setValue(toDo.priority);
                this.editToDoForm.controls.title.setValue(toDo.title);
                this.editToDoForm.controls.description.setValue(toDo.description);
            }
            this.currentId = params['id'];
        });
    }

    ionViewWillLeave() {
        this.paramSubscription.unsubscribe();
    }

    saveToDo() {
        const doTo: ToDo = {
            title: this.editToDoForm.controls.title.value,
            description: this.editToDoForm.controls.description.value,
            priority: this.editToDoForm.controls.priority.value,
        };
        if (this.currentId === 'new') {
            this.toDoService.addToDo(doTo);
        } else {
            doTo.id = Number(this.currentId);
            this.toDoService.updateToDo(doTo);
        }
        this.router.navigate(['/tabs/doing']);
    }

}
