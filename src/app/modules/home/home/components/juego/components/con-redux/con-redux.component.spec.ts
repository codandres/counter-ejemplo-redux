import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConReduxComponent } from './con-redux.component';

describe('ConReduxComponent', () => {
  let component: ConReduxComponent;
  let fixture: ComponentFixture<ConReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
