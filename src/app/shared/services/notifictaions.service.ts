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
        let timeToSend = TimeHelper.addTimeMillis(new Date(toDo.deadline.deadlineDate), -item.timeBeforeEvent);
        timeToSend = TimeHelper.convertToUTC(timeToSend);
        const dateDisplayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        item.notificationId = Number(`${toDo.id}${timeToSend.getTime()}`);
        this.notifications.schedule({
            id: item.notificationId,
            title: toDo.title,
            text: `Deadline: ${new Date(toDo.deadline.deadlineDate).toLocaleString('en', dateDisplayOptions)}`,
            sound: null,
            trigger: {at: timeToSend}
        });
    });
    return toDo;
  }

  unscheduleNotifications(toDo: ToDo) {
      console.log(toDo);
    if (!toDo.deadline.notifications) {
        return;
    }
    toDo.deadline.notifications.forEach(item => {
      this.notifications.cancel(item.notificationId);
    });
  }
}
