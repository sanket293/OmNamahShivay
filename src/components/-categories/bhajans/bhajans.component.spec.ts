import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhajansComponent } from './bhajans.component';

describe('BhajansComponent', () => {
  let component: BhajansComponent;
  let fixture: ComponentFixture<BhajansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BhajansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BhajansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
