import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor(
    public global: Global,
  ) { }

  ngOnInit(): void {
  }

}
