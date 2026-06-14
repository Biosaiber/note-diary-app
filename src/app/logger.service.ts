import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private logMessages: string[] = [];

  get messages() {
    return [...this.logMessages]
  }

  log(message: string):void {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB', { hour12: false }); // 'hh:mm:ss' format
    const logMessage = `${timeString} + ${message}`;
    this.logMessages.push(logMessage);
  }
}
