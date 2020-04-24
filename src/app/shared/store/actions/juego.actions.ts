import { createAction, props } from '@ngrx/store';

export const sumarPuntoRojos = createAction('[Juego Page] Sumar Punto Equipo Rojo');

export const sumarPuntoAzules = createAction('[Juego Page] Sumar Punto Equipo Azul');

export const restarPuntoRojos = createAction('[Juego Page] Restar Punto Equipo Rojo');

export const restarPuntoAzules = createAction('[Juego Page] Restar Punto Equipo Azul');

export const modificarPuntajeRojos = createAction(
    '[Juego Page] Modificar Puntaje Rojos',
    props<{ puntaje: number }>()
);

export const modificarPuntajeAzules = createAction(
    '[Juego Page] Modificar Puntajes Azules',
    props<{ puntaje: number }>()
);

export const reiniciarPuntaje = createAction('[Juego Page] Reiniciar Puntajes');
