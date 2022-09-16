import { TestBed } from '@angular/core/testing';

import { SoftcomunicacionService } from './softcomunicacion.service';

describe('SoftcomunicacionService', () => {
  let service: SoftcomunicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftcomunicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
