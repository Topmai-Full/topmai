import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.page.html',
  styleUrls: ['./profile1.page.scss'],
})
export class Profile1Page implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }
  goBackk(){
    this.location.back();
  }
}
