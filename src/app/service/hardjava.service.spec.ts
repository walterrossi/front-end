import { TestBed } from '@angular/core/testing';

import { HardjavaService } from './hardjava.service';

describe('HardjavaService', () => {
  let service: HardjavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardjavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
