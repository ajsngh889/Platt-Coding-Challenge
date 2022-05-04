import { Component, OnInit } from '@angular/core';
import { Residents } from '../data-models';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-residents',
  templateUrl: './planet-residents.component.html',
  styleUrls: ['./planet-residents.component.scss']
})
export class PlanetResidentsComponent implements OnInit {

  residentList: Residents[] = [];
  constructor(private data: DataService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 'Naboo';
    this.data.getData("GetResidentsOfPlanet/" + id).subscribe(response => {
      this.residentList = response.residents;
      console.log('response ', this.residentList);
    })
  }

}
