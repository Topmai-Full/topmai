import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-topmaivideo',
  templateUrl: './topmaivideo.page.html',
  styleUrls: ['./topmaivideo.page.scss'],
})
export class TopmaivideoPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }

}
