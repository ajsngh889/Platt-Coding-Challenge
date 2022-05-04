import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PlanetDetails } from '../data-models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private data: DataService) { }

  planetDetails: PlanetDetails = {
    name: '',
    rotation_period: '',
    lengthOfYear: '',
    diameter: '',
    climate: '',
    gravity: '',
    surface_water: '',
    population: ''
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '22';
    this.data.getData("GetPlanetById/" + id).subscribe(response => {
      this.planetDetails = response;
    });
  }

}
