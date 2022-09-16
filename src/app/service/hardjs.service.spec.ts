import { TestBed } from '@angular/core/testing';

import { HardjsService } from './hardjs.service';

describe('HardjsService', () => {
  let service: HardjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
