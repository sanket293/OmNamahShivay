import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StutiesComponent } from './stuties.component';

describe('StutiesComponent', () => {
  let component: StutiesComponent;
  let fixture: ComponentFixture<StutiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StutiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
