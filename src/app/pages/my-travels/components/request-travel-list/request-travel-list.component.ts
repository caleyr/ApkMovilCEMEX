import { Travel } from './../../../../interfaces/travels/travel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-travel-list',
  templateUrl: './request-travel-list.component.html',
  styleUrls: ['./request-travel-list.component.scss'],
})
export class RequestTravelListComponent implements OnInit {

  @Input() tripsList: Travel[];
  
  constructor() { }

  ngOnInit() {}

}
