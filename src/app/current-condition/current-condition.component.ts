import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveZipCode } from '../actions/zip-code.actions';
import { WeatherService } from '../core/services/weather.service';
import { State } from '../reducers';

@Component({
  selector: 'app-current-condition',
  templateUrl: './current-condition.component.html',
  styleUrls: ['./current-condition.component.scss']
})
export class CurrentConditionComponent implements OnInit {
  zipcodes: string[] = [];
  currentConditions: Map<string, any> = new Map();

  constructor(
    public weatherService: WeatherService,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.zipcodes)
      .subscribe(zips => this.zipcodes = zips.zipcodes);

    this.store.select(state => state.currentConditions)
      .subscribe(conditions => {
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
