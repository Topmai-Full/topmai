import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus-popup-model',
  templateUrl: './plus-popup-model.page.html',
  styleUrls: ['./plus-popup-model.page.scss'],
})
export class PlusPopupModelPage implements OnInit {

  constructor(public modalController: ModalController,private router: Router) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  addCategory(){
    this.dismiss()
    this.router.navigate([`add-categories`]);
  }

}
