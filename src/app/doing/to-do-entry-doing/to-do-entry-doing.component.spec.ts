import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoEntryComponent } from './to-do-entry-doing.component';

describe('ToDoEntryComponent', () => {
  let component: ToDoEntryComponent;
  let fixture: ComponentFixture<ToDoEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
