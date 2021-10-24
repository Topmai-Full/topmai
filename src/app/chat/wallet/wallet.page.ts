import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  slidesItems;
  constructor(private router: Router,private location: Location) {
    this.slidesItems=['assets/chat/wallet/banner1.png','assets/chat/wallet/banner1.png','assets/chat/wallet/banner1.png'];
  }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  gotoWallet(){
    this.router.navigate([`tabs/wallet`]);
  }
  gotoTransferencia(){
    this.router.navigate([`transferencia`]);
  }
  gotoMonedero(){
    this.router.navigate([`monedero`]);
  }
  gotoHistory(){
    this.router.navigate([`history`]);
  }
  gotoSettings(){
    this.router.navigate([`settings`]);
  }
}
