import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CurrentConditionComponent } from './current-condition/current-condition.component';

import { reducers, metaReducers } from './reducers';
import { CurrentConditionsEffects } from './effects/current-conditions.effects';

import { WeatherService } from './core/services/weather.service';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CurrentConditionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([CurrentConditionsEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log only
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
