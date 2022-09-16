import { TestBed } from '@angular/core/testing';

import { SoftapositivaService } from './softapositiva.service';

describe('SoftapositivaService', () => {
  let service: SoftapositivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftapositivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
