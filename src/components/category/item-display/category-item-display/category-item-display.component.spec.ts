import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemDisplayComponent } from './category-item-display.component';

describe('CategoryItemDisplayComponent', () => {
  let component: CategoryItemDisplayComponent;
  let fixture: ComponentFixture<CategoryItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryItemDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
