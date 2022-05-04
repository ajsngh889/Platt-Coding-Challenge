import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlanetsComponent } from './all-planets/all-planets.component';
import { PlanetResidentsComponent } from './planet-residents/planet-residents.component';
import { VehicleSummaryComponent } from './vehicle-summary/vehicle-summary.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/allPlanets', pathMatch: 'full' },
  { path: 'allPlanets', component: AllPlanetsComponent },
  { path: 'planetDetail/:id', component: PlanetDetailComponent },
  { path: 'planetResidents/:id', component: PlanetResidentsComponent },
  { path: 'vehicleSummary', component: VehicleSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
