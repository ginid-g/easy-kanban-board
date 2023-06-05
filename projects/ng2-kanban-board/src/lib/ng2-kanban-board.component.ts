import { Component } from '@angular/core';

@Component({
  selector: 'lib-ng2-kanban-board',
  template: ` <app-board [dataInput]="dummyData"></app-board> `,
  styles: [],
})
export class Ng2KanbanBoardComponent {
  dummyData = {
    boards: [
      {
        title: 'TODO',
        boardId: 1,
        tasks: [
          {
            id: 1,
            title: 'Start building UI',
            description: 'Make best UI in the world',
            comments: [],
          },
        ],
      },
      {
        title: 'TODO',
        boardId: 2,
        tasks: [
          {
            id: 2,
            title: 'Start building UI',
            description: 'Make best UI in the world',
            comments: [],
          },
        ],
      },
      {
        title: 'TODO',
        boardId: 3,
        tasks: [
          {
            id: 3,
            title: 'Start building UI',
            description: 'Make best UI in the world',
            comments: [],
          },
        ],
      },
    ],
  };
}
