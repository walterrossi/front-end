import { TestBed } from '@angular/core/testing';

import { SoftliderazgoService } from './softliderazgo.service';

describe('SoftliderazgoService', () => {
  let service: SoftliderazgoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftliderazgoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
