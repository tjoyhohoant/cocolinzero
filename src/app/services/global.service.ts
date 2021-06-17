import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Global {

  public showSidePanel = false;
  public hiddenFunctionToggleChecked = false;

  constructor() { }
}
