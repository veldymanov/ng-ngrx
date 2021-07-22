import { Action } from '@ngrx/store';

export enum ZipCodesActionTypes {
  AddZipCode = '[ZipCodes] Add ZipCode',
  RemoveZipCode = '[ZipCodes] Remove ZipCode',
}

export class AddZipCode implements Action {
  readonly type = ZipCodesActionTypes.AddZipCode;

  constructor(public zipcode: string) {}
}

export class RemoveZipCode implements Action {
  readonly type = ZipCodesActionTypes.RemoveZipCode;

  constructor(public zipcode: string) {}
}

export type ZipCodeActions = AddZipCode | RemoveZipCode;
