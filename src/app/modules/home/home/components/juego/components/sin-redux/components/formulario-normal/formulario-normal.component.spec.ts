import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNormalComponent } from './formulario-normal.component';

describe('FormularioNormalComponent', () => {
  let component: FormularioNormalComponent;
  let fixture: ComponentFixture<FormularioNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
