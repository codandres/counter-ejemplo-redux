import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinReduxComponent } from './sin-redux.component';

describe('SinReduxComponent', () => {
  let component: SinReduxComponent;
  let fixture: ComponentFixture<SinReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
