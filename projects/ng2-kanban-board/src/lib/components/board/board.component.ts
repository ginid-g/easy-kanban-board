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

interface IDraggedItem {
  boardId: number | null;
  taskId: number | null;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input('dataInput') dataInput: IData = { boards: [] };

  dragedItem: IDraggedItem = {
    boardId: null,
    taskId: null,
  };

  onDrag(event: any) {
    event.preventDefault();
    event.target.classList.add('card-dragging');
  }

  onDragEnd(event: any) {
    event.preventDefault();
    event.target.classList.remove('card-dragging');
  }

  onDragStart(event: any, boardId: number, taskId: number) {
    event.dataTransfer?.setData('text/plain', 'Draggable Element');
    this.dragedItem.boardId = boardId;
    this.dragedItem.taskId = taskId;
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDrop(event: any, boardId: number) {
    event.preventDefault();

    if (boardId) {
      const card = this.dataInput?.boards
        .find((board) => board.boardId == this.dragedItem.boardId)
        ?.tasks.find((task) => task.id == this.dragedItem.taskId);

      if (card) {
        const newBoardIndex: number = this.dataInput.boards.findIndex(
          (board) => board.boardId == boardId
        );

        if (newBoardIndex !== -1) {
          this.dataInput?.boards[newBoardIndex].tasks.reverse().push(card);
        }
      }
    }

    const currentBoardIndex = this.dataInput.boards.findIndex(
      (board) => board.boardId == this.dragedItem.boardId
    );

    if (currentBoardIndex !== -1) {
      this.dataInput.boards[currentBoardIndex].tasks = this.dataInput.boards[
        currentBoardIndex
      ].tasks.filter((task) => task.id != this.dragedItem.taskId);
    }
  }
}
