import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Global } from 'src/app/services/global.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('button') button: ElementRef;

  constructor(
    public global: Global,
  ) { }

  ngOnInit(): void {
  }

  toggleSidePanel(): void {
    this.global.showSidePanel = !this.global.showSidePanel;
    (<any>this.button).color = this.global.showSidePanel ? 'accent' : 'primary';
  }

  slideToggle(): void {
    this.global.hiddenFunctionToggleChecked = !this.global.hiddenFunctionToggleChecked;
    console.log(this.global.hiddenFunctionToggleChecked);
  }

}
