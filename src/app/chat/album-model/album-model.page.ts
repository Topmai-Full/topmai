import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-album-model',
  templateUrl: './album-model.page.html',
  styleUrls: ['./album-model.page.scss'],
})
export class AlbumModelPage implements OnInit {

  constructor(public modalController: ModalController,private router: Router) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  addCategory(){
    this.dismiss()
    this.router.navigate([`add-categories`]);
  }
  gotoDiscover(){
    this.router.navigate([`discover`]);
  }
  gotoDiscovertwo(){
    this.router.navigate([`discovertwo`]);
  }

}
