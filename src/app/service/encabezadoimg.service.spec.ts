import { TestBed } from '@angular/core/testing';

import { EncabezadoimgService } from './encabezadoimg.service';

describe('EncabezadoimgService', () => {
  let service: EncabezadoimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncabezadoimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
