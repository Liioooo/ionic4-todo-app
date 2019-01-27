import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoEntryDoneComponent } from './to-do-entry-done.component';

describe('ToDoEntryDoneComponent', () => {
  let component: ToDoEntryDoneComponent;
  let fixture: ComponentFixture<ToDoEntryDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoEntryDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoEntryDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
