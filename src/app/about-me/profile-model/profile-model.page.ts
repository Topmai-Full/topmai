import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-model',
  templateUrl: './profile-model.page.html',
  styleUrls: ['./profile-model.page.scss'],
})
export class ProfileModelPage implements OnInit {

  constructor(public modalController: ModalController,private router: Router) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
  gotoSesion(){
    this.router.navigate([`presentation`]);
  }
}
