import { TestBed } from '@angular/core/testing';

import { HardangularService } from './hardangular.service';

describe('HardangularService', () => {
  let service: HardangularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardangularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
