import { TestBed } from '@angular/core/testing';

import { ExperienciaimgService } from './experienciaimg.service';

describe('ExperienciaimgService', () => {
  let service: ExperienciaimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
