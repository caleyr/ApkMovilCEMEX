import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  private distance = new Subject<any>();
  travelDistance = this.distance.asObservable();

  private distanceOrigen = new Subject<any>();
  travelDistanceO = this.distanceOrigen.asObservable();

  private loading = new Subject<boolean>();
  loadingChange = this.loading.asObservable();

  constructor() { }

  changeDistance(n : any){
    return this.distance.next(n);
  }

  changeDistanceO(n : any){
    return this.distanceOrigen.next(n);
  }

  changeLoadign(load : boolean){
    return this.loading.next(load);
  }
  
}
