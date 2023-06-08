import { Component } from '@angular/core';

@Component({
  selector: 'lib-ng2-kanban-board',
  template: ` <app-board [dataInput]="dummyData" [users]="users"></app-board> `,
  styles: [],
})
export class Ng2KanbanBoardComponent {
  users = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Marry Lin',
    },
    {
      id: 3,
      name: 'James',
    },
  ];

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
          {
            id: 2,
            title: 'Add functionality to UI',
            description: 'Implement interactive features',
            comments: [],
          },
          // Add more tasks...
          {
            id: 3,
            title: 'Implement user authentication',
            description: 'Enable user login and registration',
            comments: [],
          },
          // Add more tasks...
        ],
      },
      {
        title: 'In Progress',
        boardId: 2,
        tasks: [
          {
            id: 4,
            title: 'Code FrontEnd',
            description: 'Develop frontend components',
            comments: [],
          },
          // Add more tasks...
        ],
      },
      {
        title: 'Final Testing',
        boardId: 3,
        tasks: [
          {
            id: 5,
            title: 'Integrate APIs',
            description: 'Connect frontend with backend APIs',
            comments: [],
          },
          {
            id: 6,
            title: 'Perform UI testing',
            description: 'Ensure UI meets requirements',
            comments: [],
          },
          // Add more tasks...
        ],
      },
      {
        title: 'Completed',
        boardId: 4,
        tasks: [
          {
            id: 7,
            title: 'Review project documentation',
            description: 'Check project documentation for completeness',
            comments: [],
          },
          // Add more tasks...
        ],
      },
      {
        title: 'Deployed',
        boardId: 5,
        tasks: [
          {
            id: 8,
            title: 'Set up production server',
            description: 'Prepare server for deployment',
            comments: [],
          },
          // Add more tasks...
        ],
      },
    ],
  };
}
