import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPuntajeNormalComponent } from './vista-puntaje-normal.component';

describe('VistaPuntajeNormalComponent', () => {
  let component: VistaPuntajeNormalComponent;
  let fixture: ComponentFixture<VistaPuntajeNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPuntajeNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPuntajeNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
