import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Planet } from '../data-models';

@Component({
  selector: 'app-all-planets',
  templateUrl: './all-planets.component.html',
  styleUrls: ['./all-planets.component.scss']
})
export class AllPlanetsComponent implements OnInit {

  planetList: Planet[] = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getData("GetAllPlanets").subscribe(response => {
      this.planetList = response.results;
      console.log('response ', this.planetList);
    });
  }

  /*loadMore(): void {
    this.data.getData("GetAllPlanets").subscribe(response => {
      this.planetList = response.results;
      console.log('response ', this.planetList);
    })
  }*/

}
