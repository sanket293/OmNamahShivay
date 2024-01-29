import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBannerComponent } from './body-banner.component';

describe('BodyBannerComponent', () => {
  let component: BodyBannerComponent;
  let fixture: ComponentFixture<BodyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
