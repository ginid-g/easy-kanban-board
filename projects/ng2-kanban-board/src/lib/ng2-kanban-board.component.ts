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
        title: 'In Progress',
        boardId: 2,
        tasks: [
          {
            id: 2,
            title: 'Code FrontEnd',
            description: 'Make best UI in the world',
            comments: [],
          },
        ],
      },
      {
        title: 'Final Testing',
        boardId: 3,
        tasks: [
          {
            id: 3,
            title: 'Integrate APIs',
            description: 'Make best UI in the world',
            comments: [],
          },
        ],
      },
      {
        title: 'Completed ',
        boardId: 4,
        tasks: [],
      },
      {
        title: 'Deployed',
        boardId: 5,
        tasks: [],
      },
    ],
  };
}
