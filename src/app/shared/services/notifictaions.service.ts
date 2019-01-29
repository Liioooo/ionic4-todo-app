import { Injectable } from '@angular/core';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {ToDo} from '../models/to-do';
import {TimeHelper} from '../helpers/TimeHelper';

@Injectable({
  providedIn: 'root'
})
export class NotifictaionsService {

  constructor(private notifications: LocalNotifications) { }

  public scheduleNotifications(toDo: ToDo): ToDo {
    if (!toDo.deadline.notifications) {
      return toDo;
    }

    toDo.deadline.notifications.forEach(item => {
        const timeToSend = TimeHelper.addTimeMillis(TimeHelper.getCurrentDate(), -item.timeBeforeEvent);
        item.notificationId = Number(`${toDo.id}${timeToSend.getTime()}`);
        this.notifications.schedule({
            id: item.notificationId,
            text: toDo.title,
            sound: null,
            trigger: {at: timeToSend}
        });
    });
    return toDo;
  }

  unscheduleNotifications(toDo: ToDo) {
    if (!toDo.deadline.notifications) {
        return;
    }
    toDo.deadline.notifications.forEach(item => {
      this.notifications.cancel(item.notificationId);
    });
  }
}
