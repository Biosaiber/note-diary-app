import { Component, inject, OnInit, DoCheck } from '@angular/core';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteListComponent } from './note-list/note-list.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  imports: [NoteCreateComponent, NoteListComponent,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, DoCheck {
  private loggerService = inject(LoggerService);

  logMessages: string[] = [];

  ngOnInit(): void {
    this.logMessages = this.loggerService.messages;
  }

  ngDoCheck(): void {
    this.logMessages = this.loggerService.messages;
  }

}
