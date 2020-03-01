import { Injectable } from '@angular/core';
export class Alert {
  message: string;
  debug: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  alerts: Alert[] = [];

  add(message: string, debug: string) {
    this.alerts.push({ message, debug });
  }

  remove(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
