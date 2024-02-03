import { TestBed } from '@angular/core/testing';

import { CategoryCardInfoService } from './category-card-info.service';

describe('CategoryCardInfoService', () => {
  let service: CategoryCardInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryCardInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
