import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageTagsComponent } from './language-tags.component';

describe('LanguageTagsComponent', () => {
  let component: LanguageTagsComponent;
  let fixture: ComponentFixture<LanguageTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
