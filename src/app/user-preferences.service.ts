import { Injectable } from '@angular/core';

@Injectable()

export class UserPreferencesService {
  private theme: 'light' | 'dark' = 'light';

  get currentTheme(): 'light' | 'dark' {
    return this.theme
  }

  setTheme(theme: 'light' | 'dark'):void {
    this.theme = theme;
  }
}
