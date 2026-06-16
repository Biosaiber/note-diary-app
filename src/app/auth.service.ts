import { Injectable, Inject, inject } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private mockUser = {
    username: 'testuser',
    password: 'testpass'
  }
  private loggerService = inject(LoggerService);

  authenticate(username: string, password: string): boolean {
    if (this.mockUser.username === username &&
      this.mockUser.password === password) {
      this.loggerService.log(`Authentication successful for username: ${username}`);
      return true;
    } else {
      this.loggerService.log(`Authentication failed for username: ${username}`);
      return false;

    }
  }
}
