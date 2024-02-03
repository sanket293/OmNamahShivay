import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jyortilingsas12ListComponent } from './jyortilingsas12-list.component';

describe('Jyortilingsas12ListComponent', () => {
  let component: Jyortilingsas12ListComponent;
  let fixture: ComponentFixture<Jyortilingsas12ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jyortilingsas12ListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Jyortilingsas12ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
