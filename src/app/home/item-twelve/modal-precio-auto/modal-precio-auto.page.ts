import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-precio-auto',
  templateUrl: './modal-precio-auto.page.html',
  styleUrls: ['./modal-precio-auto.page.scss'],
})
export class ModalPrecioAutoPage implements OnInit {

  constructor(public modalController: ModalController,private router: Router) { }

  ngOnInit() {
  }
  close() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss();
  }
}
