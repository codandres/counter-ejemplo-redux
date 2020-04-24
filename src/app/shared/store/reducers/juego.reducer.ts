import { createReducer, on, Action, createSelector } from '@ngrx/store';
import {
    sumarPuntoRojos, sumarPuntoAzules, reiniciarPuntaje,
    restarPuntoRojos, restarPuntoAzules, modificarPuntajeRojos,
    modificarPuntajeAzules
} from '../actions/juego.actions';
import { AppStore } from '../store';

export interface JuegoState {
    rojos: number;
    azules: number;
}

export const initialState: JuegoState = {
    rojos: 0,
    azules: 0
};

const _juegoReducer = createReducer(
    initialState,
    on(sumarPuntoRojos, state => ({ ...state, rojos: state.rojos + 1 })),
    on(sumarPuntoAzules, state => ({ ...state, azules: state.azules + 1 })),
    on(restarPuntoRojos, state => ({ ...state, rojos: state.rojos - 1 })),
    on(restarPuntoAzules, state => ({ ...state, azules: state.azules - 1 })),
    on(modificarPuntajeRojos, (state, { puntaje }) => ({ ...state, rojos: puntaje })),
    on(modificarPuntajeAzules, (state, { puntaje }) => ({ ...state, azules: puntaje })),
    on(reiniciarPuntaje, () => (initialState))
);

export function juegoReducer(state: JuegoState | undefined, action: Action) {
    return _juegoReducer(state, action);
}

export const selectJuegoState = (state: AppStore) => state.juego;

export const selectPuntajes = createSelector(
    selectJuegoState,
    (state: JuegoState) => state
);
