import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { TextResponseService } from '../../../services/text-response.service';

@Pipe({
  name: 'listVechicleFilter'
})
export class ListVechicleFilterPipe implements PipeTransform {

  constructor(
    private textResp : TextResponseService
  ){
  }

  transform(vehicles: Vehicle[], searchFilter: string): Vehicle[] {
    if (!vehicles || !searchFilter) {
      return vehicles;
    } else if (vehicles && searchFilter) {
      if (searchFilter) {
        vehicles = vehicles.filter(vehicle =>
          vehicle.LicenseVehiculo.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase()) ||
          vehicle.Model.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase()) ||
          this.textResp.getStatusTravelUser(vehicle.StatusTravel).toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())
        );
      }
      return vehicles;
    }
  }

}
