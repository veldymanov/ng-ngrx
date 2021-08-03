import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveZipCode } from '../actions/zip-code.actions';
import { WeatherService } from '../core/services/weather.service';
import { selectZipcodeList, State } from '../reducers';
import { CurrentConditionsState } from '../reducers/current-conditions.reducer';
import { ZipCodeState } from '../reducers/zip-codes.reducer';

@Component({
  selector: 'app-current-condition',
  templateUrl: './current-condition.component.html',
  styleUrls: ['./current-condition.component.scss']
})
export class CurrentConditionComponent implements OnInit {
  zipcodes: string[] = [];
  private currentConditions: Map<string, any> = new Map();

  constructor(
    public weatherService: WeatherService,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.store.select(selectZipcodeList)
      .subscribe(zips => {
        this.zipcodes = zips;
      });

    this.store.select((state: State) => state.currentConditions)
      .subscribe((conditions: CurrentConditionsState) => {
        this.currentConditions = conditions.currentConditions;
      });
  }

  getConditions(zip: string): any {
    return this.currentConditions.get(zip)
  }

  removeZip(zip: string): void {
    this.store.dispatch(new RemoveZipCode(zip));
  }
}
