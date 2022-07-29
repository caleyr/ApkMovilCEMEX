import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Profile } from 'src/app/models/profile.model';
import { DriversService } from '../../../../services/drivers.service';
import { DriverList } from '../../models/drivers-list';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss'],
})
export class DriverListComponent implements OnInit {

  @Input() drivers : DriverList[] = []

  constructor(
    private navCtrl : NavController,
    private driversService : DriversService
    ) { }

  ngOnInit() {}

  detailDriver( id : string ) {
    console.log(id);    
    this.driversService.id = id;
    this.navCtrl.navigateRoot('/app/conductores/detalles', { animated: false });
  }

}
