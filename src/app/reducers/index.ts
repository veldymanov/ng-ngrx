import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { currentConditionsReducer, CurrentConditionsState } from './current-conditions.reducer';
import { zipCodeReducer, ZipCodeState } from './zip-codes.reducer';


export interface State {
  zipcodes: ZipCodeState,
  currentConditions: CurrentConditionsState
}

export const reducers: ActionReducerMap<State, any> = {
  currentConditions: currentConditionsReducer,
  zipcodes: zipCodeReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
