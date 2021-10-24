import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';



@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  chatsList: Array<any>;
  constructor(private location: Location) {
    this.chatsList=[
      {
        profilePic:'../../../../assets/sobre.jpg',
        name: 'Fin ',
        recibo:'-200',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      },
      {
        profilePic:'../../../../assets/verifi.png',
        name: 'Han',
        recibo:'+0.07',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      
      },
      {
        profilePic:'../../../../assets/verifi.png',
        name: 'Rey',
        recibo:'+200.00',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      },
      {
        profilePic:'../../../../assets/sobre.jpg',
        name: 'Jerry',
        recibo:'-15.00',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      },
      {
        profilePic:'../../../../assets/avatar.png',
        name: 'Tom',
        recibo:'-515.00',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      },
      {
        profilePic:'../../../../assets/sobre.jpg',
        name: 'Luke',
        recibo:'-200.00',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      },
      {
        profilePic:'../../../../assets/avatar.png',
        name: 'Luke',
        recibo:'+2900.00',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      },
      {
        profilePic:'../../../../assets/avatar.png',
        name: 'Luke',
        recibo:'+2900.00',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      },
      {
        profilePic:'../../../../assets/sobre.jpg',
        name: 'Luke',
        recibo:'+2900.00',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      },
      {
        profilePic:'../../../../assets/verifi.png',
        name: 'Luke',
        recibo:'+2900.00',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      },
      {
        profilePic:'../../../../assets/verifi.png',
        name: 'Luke',
        recibo:'+2900.00',
        date: '18/06/21',
        saldoactual: 'Saldo actual $3538.86',
      },
    ];
   }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
}
