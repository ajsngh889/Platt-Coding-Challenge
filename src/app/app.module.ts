import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPlanetsComponent } from './all-planets/all-planets.component';
import { PlanetResidentsComponent } from './planet-residents/planet-residents.component';
import { VehicleSummaryComponent } from './vehicle-summary/vehicle-summary.component';
import { NavComponent } from './nav/nav.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPlanetsComponent,
    PlanetResidentsComponent,
    VehicleSummaryComponent,
    NavComponent,
    PlanetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
