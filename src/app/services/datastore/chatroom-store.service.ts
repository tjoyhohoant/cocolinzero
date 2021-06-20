import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatroomStore {

  private _code: BehaviorSubject<any> = new BehaviorSubject('');
  public readonly code = this._code.asObservable();
  public setCode(pin: any) {
    return this._code.next(pin);
  }

  constructor() {
      // this.loadInitialData();
  }
}
