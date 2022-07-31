import { Travel } from './../../../../interfaces/travels/travel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled-trips-list',
  templateUrl: './scheduled-trips-list.component.html',
  styleUrls: ['./scheduled-trips-list.component.scss'],
})
export class ScheduledTripsListComponent implements OnInit {

  @Input() tripsList: Travel[];

  constructor() { }

  ngOnInit() {}

}
