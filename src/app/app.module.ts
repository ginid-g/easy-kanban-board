import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Ng2KanbanBoardModule } from '../../projects/ng2-kanban-board/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ng2KanbanBoardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
