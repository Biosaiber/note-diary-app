import { Component, inject, OnInit, DoCheck } from '@angular/core';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteListComponent } from './note-list/note-list.component';
import { LoggerService } from './logger.service';
import { UserPreferencesService } from './user-preferences.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [NoteCreateComponent, NoteListComponent,],
  providers: [UserPreferencesService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, DoCheck {
  private loggerService = inject(LoggerService);
  private userPreferencesService = inject(UserPreferencesService);
  private authService = inject(AuthService);

  logMessages: string[] = [];
  currentTheme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    this.authService.authenticate('testuser', 'testpass');
    this.logMessages = this.loggerService.messages;
    this.currentTheme = this.userPreferencesService.currentTheme;
  }

  ngDoCheck(): void {
    this.logMessages = this.loggerService.messages;
  }

  toggleTheme():void {
    console.log('toggle')
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.userPreferencesService.setTheme(this.currentTheme);
  }

}
