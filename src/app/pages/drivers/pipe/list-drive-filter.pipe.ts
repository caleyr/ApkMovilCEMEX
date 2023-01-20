import { Pipe, PipeTransform } from '@angular/core';
import { UserDetail } from '../../../models/user-detail.model';

@Pipe({
  name: 'listDriveFilter'
})
export class ListDriveFilterPipe implements PipeTransform {

  transform(users: UserDetail[], searchFilter: string): UserDetail[] {
    if (!users || !searchFilter) {
      return users;
    } else if (users && searchFilter) {
      if (searchFilter) {
        users = users.filter(user =>
          user.FirstName.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase()) ||
          user.LastName.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())
        );
      }
      return users;
    }
  }

}
