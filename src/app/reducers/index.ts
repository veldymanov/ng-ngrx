import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import { currentConditionsReducer, CurrentConditionsState } from './current-conditions.reducer';
import { zipCodeReducer, ZipCodeState } from './zip-codes.reducer';


export interface State {
  zipcodes: ZipCodeState,
  currentConditions: CurrentConditionsState,
  router: RouterReducerState,
}

export const reducers: ActionReducerMap<State, any> = {
  currentConditions: currentConditionsReducer,
  zipcodes: zipCodeReducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectZipcodeState = (state: State) => state.zipcodes;

export const selectZipcodeList = createSelector(selectZipcodeState,
  (state: ZipCodeState) => state.zipcodes);