import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryListItemComponent } from './add-category-list-item.component';

describe('AddCategoryListItemComponent', () => {
  let component: AddCategoryListItemComponent;
  let fixture: ComponentFixture<AddCategoryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCategoryListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCategoryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
