import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../models/vehicle';

@Pipe({
  name: 'listVechicleFilter'
})
export class ListVechicleFilterPipe implements PipeTransform {

  transform(vehicles: Vehicle[], searchFilter: string): Vehicle[] {
    if (!vehicles || !searchFilter) {
      return vehicles;
    } else if (vehicles && searchFilter) {
      if (searchFilter) {
        vehicles = vehicles.filter(vehicle =>
          vehicle.LicenseVehiculo.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())
        );
      }
      return vehicles;
    }
  }

}
