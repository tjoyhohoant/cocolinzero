import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/services/global.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  public navigationItems = [
    'Home', 
    'Message',
    'Gallery',
    'Wishlist'
  ];

  constructor(
    private global: Global,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(link): void {
    this.router.navigate(['/overview/'+link]);
  }

}
