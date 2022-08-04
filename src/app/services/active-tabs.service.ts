import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveTabsService {

  myTravelsTab: string = 'programados';
  usersTab: string = 'actuales';
  vehiclesTab: string = 'actuales';

  constructor() { }

  clearSelectedTabs(){
    this.myTravelsTab = 'programados'
    this.usersTab = 'actuales';
    this.vehiclesTab = 'actuales';
  }
}
