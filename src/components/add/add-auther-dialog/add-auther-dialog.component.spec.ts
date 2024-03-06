import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutherDialogComponent } from './add-auther-dialog.component';

describe('AddAutherDialogComponent', () => {
  let component: AddAutherDialogComponent;
  let fixture: ComponentFixture<AddAutherDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAutherDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAutherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
