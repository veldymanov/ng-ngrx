import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddZipCode } from './actions/zip-code.actions';
import { State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-ngrx';

  constructor(
    private store: Store<State>
  ) {}

  public addLocation(zipcode: string): void {
    this.store.dispatch(new AddZipCode(zipcode))
  }
}
