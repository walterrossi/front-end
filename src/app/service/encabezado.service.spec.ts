import { TestBed } from '@angular/core/testing';

import { EncabezadoService } from './encabezado.service';

describe('EncabezadoService', () => {
  let service: EncabezadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncabezadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
