import { TestBed } from '@angular/core/testing';

import { ProyectoimgService } from './proyectoimg.service';

describe('ProyectoimgService', () => {
  let service: ProyectoimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
