import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-resolve-center',
  templateUrl: './resolve-center.page.html',
  styleUrls: ['./resolve-center.page.scss'],
})
export class ResolveCenterPage implements OnInit {
  openList;
  constructor(private location: Location) {
    this.openList=[];
  }

  ngOnInit() {
  }

  toggleFromList(n){
    const index = this.openList.indexOf(n);
    if(index>=0){
      this.openList.splice(index, 1);
      console.log(this.openList);
    }else{
      this.openList.push(n);
      console.log(this.openList);
    }
  }
  itemInList(n){
    const index = this.openList.indexOf(n);
    if(index>=0){
      return true;
    }else{
      return false;
    }
  }

  goBack(){
    this.location.back();
  }

}
