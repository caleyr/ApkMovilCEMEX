import { Component, OnInit } from '@angular/core';
import { Vehicle } from './models/vehicle';
import { VehiclesService } from '../../services/vehicles.service';
import { LoginService } from '../../services/auth/login.service';
import { CompaniesService } from '../../services/companies/companies.service';
import { ApiService } from '../../services/auth/api.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {

  vehiclesList : Vehicle[] = [];
  company : string;
  search : string;
  loading = false;

  constructor(
    private vehiclesService : VehiclesService,
    private apiService : ApiService
    ) {
      this.company = apiService.userProfile.CompanyName;
    }

  ngOnInit() {
    this.loading = true;
    this.getDataList();
  }

  getDataList(){
    this.vehiclesService.getVehicleList(this.apiService.userProfile.CompanyId).subscribe({
      next: (data : any) =>{
        this.vehiclesList = data.data.filter(data => data.Status === 2);
        this.vehiclesService.count = this.vehiclesList.length;
      },
      complete : () => {
        this.loading = false;
      }
    });
  }

  doRefresh(event){
    this.loading = true;
    setTimeout(()=>{      
      this.vehiclesList = [];
      this.getDataList();
      event.target.complete();
    }, 2000);
  }

}
