import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoService} from './services/todo.service';
import {NotifictaionsService} from './services/notifictaions.service';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        LocalNotifications
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
