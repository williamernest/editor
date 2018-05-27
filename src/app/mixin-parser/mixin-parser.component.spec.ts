import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixinParserComponent } from './mixin-parser.component';

describe('MixinParserComponent', () => {
  let component: MixinParserComponent;
  let fixture: ComponentFixture<MixinParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixinParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixinParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
