import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LoadCurrentConditionsLoaded, LoadCurrentConditionsLoadFailed } from '../actions/current-conditions.actions';
import { ZipCodesActionTypes } from '../actions/zip-code.actions';
import { WeatherService } from '../core/services/weather.service';

@Injectable()
export class CurrentConditionsEffects {

  loadCurrentConditions$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ZipCodesActionTypes.AddZipCode),
      mergeMap(action => {
        return this.weatherService.loadCurrentConditions(action['zipcode']).pipe(
          map(data => new LoadCurrentConditionsLoaded(action['zipcode'], data)),
          catchError(err => of(new LoadCurrentConditionsLoadFailed(action['zipcode'], err)))
        )
      })
    )
  });

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

}
