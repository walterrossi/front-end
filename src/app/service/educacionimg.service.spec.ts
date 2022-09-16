import { TestBed } from '@angular/core/testing';

import { EducacionimgService } from './educacionimg.service';

describe('EducacionimgService', () => {
  let service: EducacionimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
