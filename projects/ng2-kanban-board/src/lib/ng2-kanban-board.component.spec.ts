import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2KanbanBoardComponent } from './ng2-kanban-board.component';

describe('Ng2KanbanBoardComponent', () => {
  let component: Ng2KanbanBoardComponent;
  let fixture: ComponentFixture<Ng2KanbanBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ng2KanbanBoardComponent]
    });
    fixture = TestBed.createComponent(Ng2KanbanBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
