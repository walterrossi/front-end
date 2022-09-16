import { TestBed } from '@angular/core/testing';

import { SoftcreatividadService } from './softcreatividad.service';

describe('SoftcreatividadService', () => {
  let service: SoftcreatividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftcreatividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
