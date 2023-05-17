import { TestBed } from '@angular/core/testing';

import { IngiredientsService } from './ingiredients.service';

describe('IngiredientsService', () => {
  let service: IngiredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngiredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
