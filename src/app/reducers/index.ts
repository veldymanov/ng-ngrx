import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { zipCodeReducer, ZipCodeState } from './zip-codes.reducer';


export interface State {
  zipcodes: ZipCodeState
}

export const reducers: ActionReducerMap<State, any> = {
  zipcodes: zipCodeReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
