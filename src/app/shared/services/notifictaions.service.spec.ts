import { TestBed } from '@angular/core/testing';

import { NotifictaionsService } from './notifictaions.service';

describe('NotifictaionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifictaionsService = TestBed.get(NotifictaionsService);
    expect(service).toBeTruthy();
  });
});
