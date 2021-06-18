import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Global {

  // side panel 
  public showSidePanel = false;

  // toolbar toggle
  public showHiddenToggle = false;
  public hiddenFunctionToggleChecked = false;

  // toolbar slider
  public displayQuotes = [
    true, 
    false, false, false, false, false,
    false, false, false, false, false,
  ];
  public sliderMin = 0;
  public sliderMax = 10; //this.displayQuotes.length - 1;
  public sliderValue = 1; // slider current value

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
