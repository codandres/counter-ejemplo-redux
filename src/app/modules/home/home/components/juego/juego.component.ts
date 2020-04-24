import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/shared/store/store';
import { reiniciarPuntaje } from 'src/app/shared/store/actions/juego.actions';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss'],

})
export class JuegoComponent {

  reiniciarPuntajes: boolean;

  constructor(private readonly store: Store<AppStore>) { }

  reiniciarPuntajeNormal(): void {
    this.reiniciarPuntajes = true;
  }

  reiniciarPuntajeRedux(): void {
    this.store.dispatch(reiniciarPuntaje());
  }
}
