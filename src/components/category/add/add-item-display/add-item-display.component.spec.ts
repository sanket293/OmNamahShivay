import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemDisplayComponent } from './add-item-display.component';

describe('AddItemDisplayComponent', () => {
  let component: AddItemDisplayComponent;
  let fixture: ComponentFixture<AddItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
