import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-paquete',
  templateUrl: './form-paquete.page.html',
  styleUrls: ['./form-paquete.page.scss'],
})
export class FormPaquetePage implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  gotoFormPaqueterias(){
    this.router.navigate([`form-paqueterias`]);
  }
}
