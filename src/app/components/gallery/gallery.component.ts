import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [ './gallery.component.css' ]
})
export class GalleryComponent implements OnInit {

  @Input() gallery: {
    title: string,
    imgUrl: string,
    class: string
  }[];

  constructor() {
  }

  ngOnInit() {
  }

}
