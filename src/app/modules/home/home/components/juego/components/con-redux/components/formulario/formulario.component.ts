import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/shared/store/store';
import { sumarPuntoRojos, restarPuntoRojos, modificarPuntajeRojos, modificarPuntajeAzules, sumarPuntoAzules, restarPuntoAzules } from 'src/app/shared/store/actions/juego.actions';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  puntajeRojosInput: number;
  puntajeAzulesInput: number;

  constructor(private store: Store<AppStore>) { }


  sumarPuntoRojos() {
    this.store.dispatch(sumarPuntoRojos())
  }

  restarPuntoRojos() {
    this.store.dispatch(restarPuntoRojos())

  }

  modificarPuntajeRojos() {
    this.store.dispatch(modificarPuntajeRojos({ puntaje: this.puntajeRojosInput }));
  }

  sumarPuntoAzules() {
    this.store.dispatch(sumarPuntoAzules())
  }

  restarPuntoAzules() {
    this.store.dispatch(restarPuntoAzules())

  }

  modificarPuntajeAzules() {
    this.store.dispatch(modificarPuntajeAzules({ puntaje: this.puntajeAzulesInput }));
  }

}
