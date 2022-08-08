import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { Profile } from 'src/app/models/profile.model';
import { DriversService } from '../../services/drivers.service';
import { DriverList } from './models/drivers-list';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {

  driversList : DriverList[] = [];
  loading = false;

  constructor(
    private driversService : DriversService,
    private loginService : LoginService
    ) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList(){
    this.loading = true;
    this.driversService.getDriverList(this.loginService.profileUser.CompanyId).pipe(
      finalize(()=>{
        this.loading = false;
      })
    ).subscribe(data=>{
      this.driversList = data.data;
    });
  }

  doRefresh(event){
    setTimeout(()=>{      
      this.driversList = [];
      this.getDataList();
      event.target.complete();
    }, 2000);
  }

}
