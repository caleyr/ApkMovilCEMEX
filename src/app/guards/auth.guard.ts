import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';
import { LoginService } from '../services/auth/login.service';
import { Storage } from '@ionic/storage-angular';
import { MsalService } from '@azure/msal-angular';
import { ApiService } from '../services/auth/api.service';
import { UserService } from '../services/user.service';
import { filter, take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router,
    private authService: MsalService,
    private apiService: ApiService,
    private userService: UserService) {
  }

  canLoad(
  ): Observable<boolean> {
    return this.apiService.isAuthenticated.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      switchMap(async () => {
        if (await this.authService.instance.getActiveAccount() !== null) {
          const url = this.router.getCurrentNavigation().extractedUrl.toString();
          if (url.includes('/dashboard/users/user-details')) {
            this.router.navigateByUrl('/dashboard/users');
            return true;
          } else if (url.includes('/dashboard/users/update')) {
            this.router.navigateByUrl('/dashboard/users');
          } else if (url.includes('/dashboard/companies/see-company')) {
            this.router.navigateByUrl('/dashboard/companies');
            return true;
          }
          return true;
        } else {
          return true;
        }
      })
    );
  }
}
