import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Profile } from 'src/app/models/profile.model';
import { DriversService } from '../../../../services/drivers.service';
import { DriverList } from '../../models/drivers-list';
import { UserDetail } from '../../../../models/user-detail.model';
import { TextResponseService } from '../../../../services/text-response.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss'],
})
export class DriverListComponent implements OnInit {

  @Input() drivers : UserDetail[] = [];
  @Input() searchFilter: string;

  constructor(
    private navCtrl : NavController,
    private driversService : DriversService,
    public textResp : TextResponseService
    ) { }

  ngOnInit() {}

  detailDriver( id : any ) {
    this.driversService.id = id;
    this.navCtrl.navigateRoot('/app/conductores/detalles', { animated: false });
  }

}
