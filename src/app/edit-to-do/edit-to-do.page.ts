import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../shared/services/todo.service';
import {ToDo} from '../shared/models/to-do';
import {TimeHelper} from '../shared/helpers/TimeHelper';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.page.html',
  styleUrls: ['./edit-to-do.page.scss'],
})
export class EditToDoPage implements OnInit {

    private paramSubscription: Subscription;
    public titleBarText = 'Edit ToDo';
    public editToDoForm: FormGroup;
    private currentId: string;
    public currentDate: string;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private toDoService: TodoService, private router: Router) { }

    ngOnInit() {
        this.currentDate = TimeHelper.getCurrentDateISO();
        this.editToDoForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            priority: [''],
            showingDeadlineMenu: [''],
            deadline: [''],
            notificationsSelect: ['']
        });
    }

    ionViewWillEnter() {
        this.editToDoForm.controls.showingDeadlineMenu.setValue(false);
        this.paramSubscription = this.route.params.subscribe(params => {
            if (params['id'] === 'new') {
                this.titleBarText = 'Add ToDo';
                this.editToDoForm.controls.priority.setValue(5);
                this.editToDoForm.controls.title.setValue('');
                this.editToDoForm.controls.description.setValue('');
                this.editToDoForm.controls.deadline.setValue(this.currentDate);
            } else {
                const toDo = this.toDoService.getToDo(params['id']);
                this.editToDoForm.controls.priority.setValue(toDo.priority);
                this.editToDoForm.controls.title.setValue(toDo.title);
                this.editToDoForm.controls.description.setValue(toDo.description);
                if (toDo.deadline) {
                    this.editToDoForm.controls.deadline.setValue(toDo.deadline.deadlineDate);
                    this.editToDoForm.controls.showingDeadlineMenu.setValue(true);
                    if (toDo.deadline.notifications) {
                        this.editToDoForm.controls.notificationsSelect.setValue(toDo.deadline.notifications.map(item => item.timeBeforeEvent + ''));
                    }
                } else {
                    this.editToDoForm.controls.deadline.setValue(this.currentDate);
                }
            }
            this.currentId = params['id'];
        });
    }

    public get showingDeadlineMenu(): boolean {
        return this.editToDoForm.controls.showingDeadlineMenu.value;
    }

    ionViewWillLeave() {
        this.paramSubscription.unsubscribe();
    }

    saveToDo() {
        let deadline;
        if (this.showingDeadlineMenu) {
            deadline = {
                deadlineDate: new Date(this.editToDoForm.controls.deadline.value).toISOString(),
            };
            if (this.editToDoForm.controls.notificationsSelect.value) {
                deadline.notifications = this.editToDoForm.controls.notificationsSelect.value
                    .map(item => Number(item))
                    .map(item => {
                        return {timeBeforeEvent: item};
                    });
            }
        }
        const doTo: ToDo = {
            title: this.editToDoForm.controls.title.value,
            description: this.editToDoForm.controls.description.value,
            priority: this.editToDoForm.controls.priority.value,
            deadline: deadline
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
