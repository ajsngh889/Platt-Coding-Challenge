import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Vehicle } from '../data-models';

@Component({
  selector: 'app-vehicle-summary',
  templateUrl: './vehicle-summary.component.html',
  styleUrls: ['./vehicle-summary.component.scss']
})
export class VehicleSummaryComponent implements OnInit {

  vehicleList: Vehicle[] = [];
  constructor(private data: DataService) { }


  ngOnInit(): void {
    this.data.getData("VehicleSummary").subscribe(response => {
      this.vehicleList = response.details;
      console.log('response ', this.vehicleList);
    })
  }


}
