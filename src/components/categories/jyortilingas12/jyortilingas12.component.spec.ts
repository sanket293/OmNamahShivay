import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jyortilingas12Component } from './jyortilingas12.component';

describe('Jyortilingas12Component', () => {
  let component: Jyortilingas12Component;
  let fixture: ComponentFixture<Jyortilingas12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jyortilingas12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Jyortilingas12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
