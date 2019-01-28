import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoService} from './services/todo.service';
import {NotifictaionsService} from './services/notifictaions.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [TodoService, NotifictaionsService],
        };
    }
}
