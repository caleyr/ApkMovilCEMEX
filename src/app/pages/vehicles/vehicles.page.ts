import { Component, OnInit } from '@angular/core';
import { Vehicle } from './models/vehicle';
import { VehiclesService } from '../../services/vehicles.service';
import { LoginService } from '../../services/auth/login.service';
import { CompaniesService } from '../../services/companies/companies.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {

  vehiclesList : Vehicle[] = [];
  company : string;

  constructor(
    private vehiclesService : VehiclesService,
    private loginService : LoginService,
    private companiesService : CompaniesService
    ) { 
      this.companiesService.getCompany(loginService.profileUser.CompanyId).subscribe(async data =>{
        this.company = data.data.companyName;
      }); 
    }

  ngOnInit() {
    this.getDataList();
  }

  getDataList(){
    this.vehiclesService.getVehicleList(this.loginService.profileUser.CompanyId).subscribe(data=>{
      console.log(data);      
      this.vehiclesList = data.data;
    });
  }

}
