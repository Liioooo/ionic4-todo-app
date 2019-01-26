import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToDoPage } from './edit-to-do.page';

describe('EditToDoPage', () => {
  let component: EditToDoPage;
  let fixture: ComponentFixture<EditToDoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditToDoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
