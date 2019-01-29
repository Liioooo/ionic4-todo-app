import { Injectable } from '@angular/core';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {ToDo} from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class NotifictaionsService {

  constructor(private notifctaions: LocalNotifications) { }

  public scheduleNotefications(toDo: ToDo): ToDo {
    const newToDo = toDo;

    if (!toDo.deadline.notifications) {
      return toDo;
    }

    newToDo.deadline.notifications.forEach(item => {
        let timeToSend = new Date(newToDo.deadline.deadline - Number(item.timeBeforeEvent));
        item.noteficationId = Number(`${newToDo.id}${timeToSend}`);
        timeToSend = new Date(timeToSend);
        this.notifctaions.schedule({
            id: item.noteficationId,
            text: newToDo.title,
            sound: null,
            trigger: {at: timeToSend}
        });
    });
    return newToDo;
  }

  unscheduleNotefications(toDo: ToDo) {
    toDo.deadline.notifications.forEach(item => {
      this.notifctaions.cancel(item.noteficationId);
    });
  }
}
