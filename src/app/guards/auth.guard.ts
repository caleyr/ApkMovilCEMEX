import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';
import { LoginService } from '../services/auth/login.service';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(private router: Router, private loginService: LoginService, private storage : Storage){}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loginService.isLogged().then( data=>{
      const token = data;
      if(token){
        return true;
      }else{
        this.router.navigateByUrl('/login');
        return false;
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
  }
}
