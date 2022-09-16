import { TestBed } from '@angular/core/testing';

import { HardhtmlService } from './hardhtml.service';

describe('HardhtmlService', () => {
  let service: HardhtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardhtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
