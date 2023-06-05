import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2KanbanBoardComponent } from './ng2-kanban-board.component';

import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [Ng2KanbanBoardComponent, BoardComponent],
  imports: [CommonModule],
  exports: [Ng2KanbanBoardComponent, BoardComponent],
})
export class Ng2KanbanBoardModule {}
