import { TestBed } from '@angular/core/testing';

import { MantraService } from './mantra.service';

describe('MantraService', () => {
  let service: MantraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
