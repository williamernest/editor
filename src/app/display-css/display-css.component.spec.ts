import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCssComponent } from './display-css.component';

describe('DisplayCssComponent', () => {
  let component: DisplayCssComponent;
  let fixture: ComponentFixture<DisplayCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
