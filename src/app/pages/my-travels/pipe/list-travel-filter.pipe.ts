import { Pipe, PipeTransform } from '@angular/core';
import { Travel } from '../../../interfaces/travels/travel';

@Pipe({
  name: 'listTravelFilter'
})
export class ListTravelFilterPipe implements PipeTransform {

  transform(travels: Travel[], searchFilter: string): Travel[] {
    if (!travels || !searchFilter) {
      return travels;
    } else if (travels && searchFilter) {
      if (searchFilter) {
        travels = travels.filter(travel =>
          travel.Destiny.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase()) ||
          travel.Source.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())
        );
      }
      return travels;
    }
  }

}
