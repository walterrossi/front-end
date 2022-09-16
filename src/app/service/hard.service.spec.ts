import { TestBed } from '@angular/core/testing';

import { HardService } from './hard.service';

describe('HardService', () => {
  let service: HardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
