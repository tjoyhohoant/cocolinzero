import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Global } from 'src/app/services/global.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('button') button: ElementRef;

  showSlider = true;
  showHiddenToggle = false;

  constructor(
    public global: Global,
    private router: Router,
  ) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        let path = val.urlAfterRedirects;
        this.showSlider = (path === '/overview/home');
        this.showHiddenToggle = false;
      }
    });
  }

  ngOnInit(): void {
    
  }

  toggleSidePanel(): void {
    this.global.showSidePanel = !this.global.showSidePanel;
    (<any>this.button).color = this.global.showSidePanel ? 'accent' : 'primary';
  }

  onInputChange(event: MatSliderChange): void {
    // console.log(event.value);
    this.global.sliderValue = event.value;
    this.global.toggleQuotes();
  }

  checkSliderValue(event: MatSliderChange): void {
    // console.log('slider val: ' + event.value);
    this.showHiddenToggle = (event.value === this.global.sliderMax);
    if (!this.showHiddenToggle) this.global.hiddenFunctionToggleChecked = false;
  }

  slideToggle(): void {
    this.global.hiddenFunctionToggleChecked = !this.global.hiddenFunctionToggleChecked;
    //console.log(this.global.hiddenFunctionToggleChecked);
  }

}
