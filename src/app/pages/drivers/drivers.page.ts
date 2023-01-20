import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { Profile } from 'src/app/models/profile.model';
import { DriversService } from '../../services/drivers.service';
import { DriverList } from './models/drivers-list';
import { finalize, filter } from 'rxjs/operators';
import { UserDetail } from '../../models/user-detail.model';
import { ApiService } from '../../services/auth/api.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {

  driversList : UserDetail[] = [];
  loading = false;
  search : string;

  constructor(
    private driversService : DriversService,
    private apiService : ApiService
    ) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList(){
    this.loading = true;
    this.driversService.getDriverList(this.apiService.userProfile.CompanyId).pipe(
      finalize(()=>{
        this.loading = false;
      })
    ).subscribe(data=>{
      this.driversList = data.data.filter( data => data.RolesId === 1);
    });
  }

  doRefresh(event){
    this.loading = true;
    setTimeout(()=>{      
      this.driversList = [];
      this.getDataList();
      event.target.complete();
    }, 2000);
  }

}
