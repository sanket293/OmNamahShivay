import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StutieListComponent } from './stutie-list.component';

describe('StutieListComponent', () => {
  let component: StutieListComponent;
  let fixture: ComponentFixture<StutieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StutieListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StutieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
