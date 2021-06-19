import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public newYorkCollection = [
    'shake_shack.jpg',
    'brooklyn_bridge.jpg',
    'airtrain.jpg',
    'mcdonalds.jpg',
    'egg_tart.jpg',
    'cake.jpg',
    'china_town.JPG',
    'ramen.JPG',
    'hands1.jpg',
    'hands2.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
