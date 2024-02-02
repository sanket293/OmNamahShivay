import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhajanListComponent } from './bhajan-list.component';

describe('BhajanListComponent', () => {
  let component: BhajanListComponent;
  let fixture: ComponentFixture<BhajanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BhajanListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BhajanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
