import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantraListComponent } from './mantra-list.component';

describe('MantraListComponent', () => {
  let component: MantraListComponent;
  let fixture: ComponentFixture<MantraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantraListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MantraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
