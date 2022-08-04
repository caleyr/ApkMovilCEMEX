import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveTabsService {

  myTravelsTab: string = 'programados';

  constructor() { }

  clearSelectedTabs(){
    this.myTravelsTab = 'programados'
  }
}
