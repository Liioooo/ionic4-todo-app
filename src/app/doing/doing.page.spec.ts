import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingPage } from './doing.page';

describe('DoingPage', () => {
  let component: DoingPage;
  let fixture: ComponentFixture<DoingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
