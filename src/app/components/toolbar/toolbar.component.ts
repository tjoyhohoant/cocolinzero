import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Global } from 'src/app/services/global.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('button') button: ElementRef;

  showHiddenToggle = false;

  constructor(
    public global: Global,
  ) { }

  ngOnInit(): void {
  }

  toggleSidePanel(): void {
    this.global.showSidePanel = !this.global.showSidePanel;
    (<any>this.button).color = this.global.showSidePanel ? 'accent' : 'primary';
  }

  onInputChange(event: MatSliderChange): void {
    console.log("This is emitted as the thumb slides");
    console.log(event.value);
    this.global.sliderValue = event.value;
    this.global.toggleQuotes();
  }

  checkSliderValue(event: MatSliderChange): void {
    console.log('slider val: ' + event.value);
    this.showHiddenToggle = (event.value === this.global.sliderMax);
    if (!this.showHiddenToggle) this.global.hiddenFunctionToggleChecked = false;
  }

  slideToggle(): void {
    this.global.hiddenFunctionToggleChecked = !this.global.hiddenFunctionToggleChecked;
    //console.log(this.global.hiddenFunctionToggleChecked);
  }

}
