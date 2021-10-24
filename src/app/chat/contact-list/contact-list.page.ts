import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  contacts;
  constructor(private location: Location, private router: Router) {
    this.contacts = {
      // P:[
      //   {name:'Archivos', icon: 'assets/chat/contacts/file.png'}
      // ],
      K:[
        {name:'Kasun', icon: 'assets/chat/contacts/1.png'},
        {name:'Kavi', icon: 'assets/chat/contacts/2.png'}
      ],
      R:[
        {name:'Ravi', icon: 'assets/chat/contacts/3.png'},
      ],
      S:[
        {name:'Sanduni', icon: 'assets/chat/contacts/4.png'},
        {name:'Sahunds', icon: 'assets/chat/contacts/5.png'},
        {name:'Sari', icon: 'assets/chat/contacts/1.png'}
      ],
      T:[
        {name:'Tasuri', icon: 'assets/chat/contacts/2.png'},
        {name:'Tsunami', icon: 'assets/chat/contacts/3.png'}
      ],
    };
  }

  ngOnInit() {
  }
  goBack(){
    this.location.back();
  }
  keys() {
    return Object.keys(this.contacts);
  }
  gotoProfile1(){
    this.router.navigate([`profile1`]);
  }
  gotoNewContact(){
    this.router.navigate([`register`]);
  }


}
