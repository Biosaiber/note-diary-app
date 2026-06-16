import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private mockUser = {
    username: 'testuser',
    password: 'testpass'
  }

  authenticate(username: string, password: string): boolean {
    return this.mockUser.username === username &&
      this.mockUser.password === password;
  }
}
