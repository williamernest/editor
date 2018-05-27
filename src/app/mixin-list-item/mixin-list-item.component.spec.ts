import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixinListItemComponent } from './mixin-list-item.component';

describe('MixinListItemComponent', () => {
  let component: MixinListItemComponent;
  let fixture: ComponentFixture<MixinListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixinListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixinListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
