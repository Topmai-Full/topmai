import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-paqueterias',
  templateUrl: './form-paqueterias.page.html',
  styleUrls: ['./form-paqueterias.page.scss'],
})
export class FormPaqueteriasPage implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
