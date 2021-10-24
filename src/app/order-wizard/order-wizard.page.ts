import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-wizard',
  templateUrl: './order-wizard.page.html',
  styleUrls: ['./order-wizard.page.scss'],
})
export class OrderWizardPage implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }
   gotoFormPaquete(){
    this.router.navigate([`form-paquete`]);
  }
}
