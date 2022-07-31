import { Travel } from './../../../../interfaces/travels/travel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-trips-list',
  templateUrl: './previous-trips-list.component.html',
  styleUrls: ['./previous-trips-list.component.scss'],
})
export class PreviousTripsListComponent implements OnInit {

  @Input() tripsList: Travel[];

  constructor() { }

  ngOnInit() {}

}
