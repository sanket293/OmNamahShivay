import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivChalisaComponent } from './shiv-chalisa.component';

describe('ShivChalisaComponent', () => {
  let component: ShivChalisaComponent;
  let fixture: ComponentFixture<ShivChalisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShivChalisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShivChalisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
