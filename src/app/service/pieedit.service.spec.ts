import { TestBed } from '@angular/core/testing';

import { PieeditService } from './pieedit.service';

describe('PieeditService', () => {
  let service: PieeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
