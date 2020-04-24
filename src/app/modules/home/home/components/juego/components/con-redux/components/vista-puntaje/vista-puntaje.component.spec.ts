import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPuntajeComponent } from './vista-puntaje.component';

describe('VistaPuntajeComponent', () => {
  let component: VistaPuntajeComponent;
  let fixture: ComponentFixture<VistaPuntajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPuntajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPuntajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
