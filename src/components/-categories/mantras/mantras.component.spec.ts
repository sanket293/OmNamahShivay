import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantrasComponent } from './mantras.component';

describe('MantrasComponent', () => {
  let component: MantrasComponent;
  let fixture: ComponentFixture<MantrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MantrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
