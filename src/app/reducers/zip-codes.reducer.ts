import { Action } from '@ngrx/store';
import { ZipCodeActions, ZipCodesActionTypes } from '../actions/zip-code.actions';


export const zipCodesFeatureKey = 'zipCodes';

export interface ZipCodeState {
  zipcodes: string[]
}

export const initialState: ZipCodeState = {
  zipcodes: []
};

export function zipCodeReducer(state = initialState, action: ZipCodeActions): ZipCodeState {
  switch (action.type) {
    case ZipCodesActionTypes.AddZipCode:
      return {...state, zipcodes: [...state.zipcodes, action.zipcode]}
    case ZipCodesActionTypes.RemoveZipCode:
      return {...state, zipcodes: state.zipcodes.filter(zipcode => zipcode !== action.zipcode)}

    default:
      return state;
  }
}
