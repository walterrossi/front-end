import { TestBed } from '@angular/core/testing';

import { HardcssService } from './hardcss.service';

describe('HardcssService', () => {
  let service: HardcssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
