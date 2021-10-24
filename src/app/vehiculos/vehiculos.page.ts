import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  innerWidth;imageSet;selectedImagesSet;
  constructor(private location: Location) {
    this.imageSet= [
      [{path:'assets/homePage/single-items/1/slider1.jpg'},
        {path:'assets/homePage/single-items/1/slider1.jpg'},
        {path:'assets/homePage/single-items/1/slider1.jpg'},],
      [{path:'assets/homePage/single-items/1/slider2.jpg'},
        {path:'assets/homePage/single-items/1/slider2.jpg'},
        {path:'assets/homePage/single-items/1/slider2.jpg'},],
      [{path:'assets/homePage/single-items/1/slider3.jpg'},
        {path:'assets/homePage/single-items/1/slider3.jpg'},
        {path:'assets/homePage/single-items/1/slider3.jpg'},]
    ];
    this.selectedImagesSet=this.imageSet[0];
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  goBack(){
    this.location.back();
  }
}
