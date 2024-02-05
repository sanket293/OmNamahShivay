import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCardInfoComponent } from './category-card-info.component';

describe('CategoryCardInfoComponent', () => {
  let component: CategoryCardInfoComponent;
  let fixture: ComponentFixture<CategoryCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCardInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
