import { Component, Input } from '@angular/core';

interface IComment {
  userName: string;
  message: string;
  createdAt?: string;
}

interface ITask {
  id: number;
  title: string;
  description: string;
  comments: IComment[];
}

interface IBoard {
  title: string;
  boardId: number;
  tasks: ITask[];
}

interface IData {
  boards: IBoard[];
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input('dataInput') dataInput: IData | null = null;

  onDragStop(event: any, boardId: number, taskId: number) {
    console.log('Drag stop');
    console.log(event);
  }

  onDrop(event: any, boardId: number) {
    console.log('On Drop');
    console.log(event);
    console.log(boardId);
  }
}
