import { TestBed } from '@angular/core/testing';

import { Ng2KanbanBoardService } from './ng2-kanban-board.service';

describe('Ng2KanbanBoardService', () => {
  let service: Ng2KanbanBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2KanbanBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
