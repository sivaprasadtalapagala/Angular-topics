import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSliderComponent } from './child-slider.component';

describe('ChildSliderComponent', () => {
  let component: ChildSliderComponent;
  let fixture: ComponentFixture<ChildSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
