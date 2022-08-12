import { Component, OnInit } from '@angular/core';
import { Travel } from '../../../../../../interfaces/travels/travel';

@Component({
  selector: 'app-modal-detail-map-admin',
  templateUrl: './modal-detail-map-admin.component.html',
  styleUrls: ['./modal-detail-map-admin.component.scss'],
})
export class ModalDetailMapAdminComponent implements OnInit {

  travelDetail: Travel;

  constructor() { }

  ngOnInit() {}

}
