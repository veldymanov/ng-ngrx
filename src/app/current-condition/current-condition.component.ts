import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Component({
  selector: 'app-current-condition',
  templateUrl: './current-condition.component.html',
  styleUrls: ['./current-condition.component.scss']
})
export class CurrentConditionComponent implements OnInit {
  zipcodes: string[] = [];

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.zipcodes)
      .subscribe(zips => this.zipcodes = zips.zipcodes);
  }

}
