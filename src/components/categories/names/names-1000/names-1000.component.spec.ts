import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Names1000Component } from './names-1000.component';

describe('Names1000Component', () => {
  let component: Names1000Component;
  let fixture: ComponentFixture<Names1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Names1000Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Names1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
