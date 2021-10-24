/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { SignInPage } from '../sign-in/sign-in.page';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage implements OnInit {

  constructor(private location: Location, public modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }
  async Login() {
    const modal = await this.modalController.create({
      component: LoginPage,
    });
    return await modal.present();
  }
  async Register() {
    const modal = await this.modalController.create({
      component: SignInPage,
    });
    return await modal.present();
  }
  goBack() {
    this.location.back();
  }
}
