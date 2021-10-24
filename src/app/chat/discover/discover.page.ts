import {Component, HostListener, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  showHeader; items;
  constructor(private location: Location) {
    this.showHeader=false;
    this.items=[
      {
        name: 'Dany Trejo',
        profilePic:'assets/chat/contacts/2.png',
        images:['assets/chat/contacts/2.png','assets/chat/contacts/2.png','assets/chat/contacts/2.png','assets/chat/contacts/2.png']
      },
      {
        name: 'Theshan Senaviree',
        profilePic:'assets/chat/contacts/3.png',
        images:['assets/chat/contacts/2.png','assets/chat/contacts/2.png']
      },
      {
        name: 'New Person ',
        profilePic:'assets/chat/contacts/4.png',
        images:['assets/chat/contacts/2.png']
      },
      {
        name: 'This is Me',
        profilePic:'assets/chat/contacts/5.png',
        images:['assets/chat/contacts/2.png','assets/chat/contacts/2.png','assets/chat/contacts/2.png',]
      }
    ];
  }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }
  onScroll(e) {
      console.log(e.detail.currentY);
      if(e.detail.currentY>200){
        this.showHeader=true;
      }else{
        this.showHeader=false;
      }
    };

}
