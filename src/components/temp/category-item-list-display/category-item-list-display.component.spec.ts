import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemListDisplayComponent } from './category-item-list-display.component';

describe('CategoryItemListDisplayComponent', () => {
  let component: CategoryItemListDisplayComponent;
  let fixture: ComponentFixture<CategoryItemListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryItemListDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryItemListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
