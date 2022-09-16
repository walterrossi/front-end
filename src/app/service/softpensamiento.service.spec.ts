import { TestBed } from '@angular/core/testing';

import { SoftpensamientoService } from './softpensamiento.service';

describe('SoftpensamientoService', () => {
  let service: SoftpensamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftpensamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
