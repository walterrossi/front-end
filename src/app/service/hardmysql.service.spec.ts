import { TestBed } from '@angular/core/testing';

import { HardmysqlService } from './hardmysql.service';

describe('HardmysqlService', () => {
  let service: HardmysqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardmysqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
