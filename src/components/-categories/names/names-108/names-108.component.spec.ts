import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Names108Component } from './names-108.component';

describe('Names108Component', () => {
  let component: Names108Component;
  let fixture: ComponentFixture<Names108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Names108Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Names108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
