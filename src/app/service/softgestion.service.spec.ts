import { TestBed } from '@angular/core/testing';

import { SoftgestionService } from './softgestion.service';

describe('SoftgestionService', () => {
  let service: SoftgestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftgestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
