import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  private _refresh$ = new Subject<void>();

  constructor() { }

  get refresh$(){
    return this._refresh$;
  }
}
