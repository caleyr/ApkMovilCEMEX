import { Location } from '@angular/common';
import { TravelService } from './../../../services/travels/travel.service';
import { Travel } from './../../../interfaces/travels/travel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-trip-request',
  templateUrl: './details-trip-request.page.html',
  styleUrls: ['./details-trip-request.page.scss'],
})
export class DetailsTripRequestPage implements OnInit {

  id: string;
  travel = new Travel();

  constructor(private location : Location,
    private travelService: TravelService) { }

  ngOnInit() {
    this.getData();
  }

  onBack(){
    this.location.back();
  }

  getData() {
    if (this.travelService.id !== null) {
      this.id = this.travelService.id;
      this.travelService.getTravelDetail(this.id).subscribe(data => {
        this.travel = data.data;
      });
    }
  }

}
