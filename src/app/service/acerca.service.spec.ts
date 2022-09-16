import { TestBed } from '@angular/core/testing';

import { AcercaService } from './acerca.service';

describe('AcercaService', () => {
  let service: AcercaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcercaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
