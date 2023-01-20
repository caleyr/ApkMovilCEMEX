import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { VehiclesService } from '../../../../services/vehicles.service';
import { TextResponseService } from '../../../../services/text-response.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {

  @Input() vehicles : Vehicle[] = []
  @Input() companyName : string;
  @Input() searchFilter: string;

  constructor(
    private navCtrl : NavController,
    private vehiclesService : VehiclesService,
    public textResp : TextResponseService
    ) { }

  ngOnInit() {}

  detailVehicle( id: number ) {
    this.vehiclesService.id = id; 
    this.navCtrl.navigateRoot('/app/vehiculos/detalles', { animated: false });
  }

}
