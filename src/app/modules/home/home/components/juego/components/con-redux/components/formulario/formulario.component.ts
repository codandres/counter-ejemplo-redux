import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/shared/store/store';
import {
  sumarPuntoRojos, restarPuntoRojos, modificarPuntajeRojos,
  modificarPuntajeAzules, sumarPuntoAzules, restarPuntoAzules
} from 'src/app/shared/store/actions/juego.actions';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  puntajeRojosInput = 0;
  puntajeAzulesInput = 0;

  constructor(private readonly store: Store<AppStore>) { }


  sumarPuntoRojos(): void {
    this.store.dispatch(sumarPuntoRojos());
  }

  restarPuntoRojos(): void {
    this.store.dispatch(restarPuntoRojos());

  }

  modificarPuntajeRojos(): void {
    this.store.dispatch(modificarPuntajeRojos({ puntaje: this.puntajeRojosInput }));
  }

  sumarPuntoAzules(): void {
    this.store.dispatch(sumarPuntoAzules());
  }

  restarPuntoAzules(): void {
    this.store.dispatch(restarPuntoAzules());

  }

  modificarPuntajeAzules(): void {
    this.store.dispatch(modificarPuntajeAzules({ puntaje: this.puntajeAzulesInput }));
  }

}
