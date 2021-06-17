import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  showLove = false;
  
  constructor(
    public global: Global,
  ) { }

  ngOnInit(): void {
  }

}
