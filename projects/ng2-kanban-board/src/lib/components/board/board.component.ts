import { Component, Input, Output, EventEmitter } from '@angular/core';

interface IComment {
  userName: string;
  message: string;
  createdAt?: string;
}

interface ITask {
  id: number | string;
  title: string;
  description: string;
  comments: IComment[];
}

interface IBoard {
  title: string;
  boardId: number | string;
  tasks: ITask[];
}

interface IData {
  boards: IBoard[];
}

interface IDraggedItem {
  boardId: number | string | null;
  taskId: number | string | null;
}

interface IUsers {
  id: number | string;
  name: string;
}

interface IBoardChangeOutput {
  newBoardId: number | string;
  taskId: number | string;
}
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input('dataInput') dataInput: IData = { boards: [] };
  @Input('users') users: IUsers[] = [];

  dragedItem: IDraggedItem = {
    boardId: null,
    taskId: null,
  };

  @Output('onBoardChange') onBoardChange: EventEmitter<IBoardChangeOutput> =
    new EventEmitter();

  onDrag(event: any) {
    event.preventDefault();
    event.target.classList.add('card-dragging');
  }

  onDragEnd(event: any) {
    event.preventDefault();
    event.target.classList.remove('card-dragging');
  }

  onDragStart(event: any, boardId: number | string, taskId: number | string) {
    event.dataTransfer?.setData('text/plain', 'Draggable Element');
    this.dragedItem.boardId = boardId;
    this.dragedItem.taskId = taskId;
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDrop(event: any, boardId: number | string) {
    event.preventDefault();

    if (boardId) {
      const card = this.dataInput?.boards
        .find((board) => board.boardId == this.dragedItem.boardId)
        ?.tasks.find((task) => task.id == this.dragedItem.taskId);

      if (card) {
        const newBoardIndex: number = this.dataInput.boards.findIndex(
          (board) => board.boardId == boardId
        );

        const currentBoardIndex = this.dataInput.boards.findIndex(
          (board) => board.boardId == this.dragedItem.boardId
        );

        // Return if card is dropped in same board
        if (newBoardIndex == currentBoardIndex) {
          return;
        }

        // Move card to new board
        if (newBoardIndex !== -1) {
          this.dataInput?.boards[newBoardIndex].tasks.push(card);
        }

        // Remove card from the current board
        if (currentBoardIndex !== -1) {
          this.dataInput.boards[currentBoardIndex].tasks =
            this.dataInput.boards[currentBoardIndex].tasks.filter(
              (task) => task.id != this.dragedItem.taskId
            );
        }

        this.onBoardChange.emit({
          newBoardId: boardId,
          taskId: this.dragedItem.taskId || 0,
        });
      }
    }
  }
}
