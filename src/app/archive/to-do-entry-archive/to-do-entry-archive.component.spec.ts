import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoEntryArchiveComponent } from './to-do-entry-archive.component';

describe('ToDoEntryArchiveComponent', () => {
  let component: ToDoEntryArchiveComponent;
  let fixture: ComponentFixture<ToDoEntryArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoEntryArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoEntryArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
