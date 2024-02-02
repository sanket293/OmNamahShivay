import { TestBed } from '@angular/core/testing';

import { StutieService } from './stutie.service';

describe('StutieService', () => {
  let service: StutieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StutieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
