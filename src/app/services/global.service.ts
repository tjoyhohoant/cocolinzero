import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Global {

  public showSidePanel = false;

  public showHiddenToggle = false;
  public hiddenFunctionToggleChecked = false;

  public sliderMin = 0;
  public sliderMax = 4;
  public sliderValue = 1;

  public displayQuotes = [true, false, false, false, false, false];

  constructor() { }

  toggleQuotes(): void {
    // toggle all to false first
    for (let i = 1; i < this.displayQuotes.length; i++) {
      this.displayQuotes[i] = false;
    }

    // toggle slot to true based on sliderValue 
    for (let i = 1; i <= this.sliderValue; i++) {
      this.displayQuotes[i] = true;
    }
    // console.log(this.displayQuotes);
  }
}
