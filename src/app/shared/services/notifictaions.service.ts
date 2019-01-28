import { Injectable } from '@angular/core';
import {LocalNotifications} from '@ionic-native/local-notifications';
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
        const deadlineTime = new Date(newToDo.deadline.time);
        const deadline = new Date(newToDo.deadline.date);
        deadline.setHours(deadlineTime.getHours());
        deadline.setMinutes(deadlineTime.getMinutes());
        const timeToSend = new Date(deadline.getMilliseconds() - item.timeBeforeEvent);
        item.noteficationId = Number(`${newToDo.id}${timeToSend.getMilliseconds()}`);
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
