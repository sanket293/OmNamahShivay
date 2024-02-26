import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryItemDisplayComponent } from './add-category-item-display.component';

describe('AddCategoryItemDisplayComponent', () => {
  let component: AddCategoryItemDisplayComponent;
  let fixture: ComponentFixture<AddCategoryItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCategoryItemDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCategoryItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
