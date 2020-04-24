import { ActionReducerMap } from '@ngrx/store';
import { JuegoState, juegoReducer } from './reducers/juego.reducer';

export interface AppStore {
    juego: JuegoState
}

export const store: ActionReducerMap<AppStore> = {
    juego: juegoReducer,
}
