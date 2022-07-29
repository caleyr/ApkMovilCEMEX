import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { Profile } from 'src/app/models/profile.model';
import { DriversService } from '../../services/drivers.service';
import { DriverList } from './models/drivers-list';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {

  driversList : DriverList[] = [];

  constructor(
    private driversService : DriversService,
    private loginService : LoginService
    ) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList(){
    this.driversService.getDriverList(this.loginService.profileUser.CompanyId).subscribe(data=>{
      this.driversList = data;
    });
  }

}
