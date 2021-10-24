import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.page.html',
  styleUrls: ['./chats-list.page.scss'],
})
export class ChatsListPage implements OnInit {
  chatsList: Array<any>;
  constructor(private location: Location,private router: Router) {
    this.chatsList=[
      {
        profilePic:'assets/chat/chatList/1.png',
        name: 'Kasun Chandika ',
        lastMsg:'My last message',
        date: '18/06/21',
      },
      {
        profilePic:'assets/chat/chatList/2.png',
        name: 'Chandika Rathnayake',
        lastMsg:'New Chat',
        date: '18/06/21',
        mute:true
      },
      {
        profilePic:'assets/chat/chatList/3.png',
        name: 'Theshan Senavirat',
        lastMsg:'My last message',
        date: '18/06/21',
      },
      {
        profilePic:'assets/chat/chatList/4.png',
        name: 'Tom and Jerry',
        lastMsg:'My last message',
        date: '18/06/21',
      },
      {
        profilePic:'assets/chat/chatList/dany.jpg',
        name: 'Giovani Brito',
        lastMsg:'My last message',
        date: '18/06/21',
      },
      {
        profilePic:'assets/chat/chatList/javi.jpg',
        name: 'Javier Trejo',
        lastMsg:'My last message',
        date: '18/06/21',
      },
      {
        profilePic:'assets/chat/chatList/topmai.png',
        name: 'Topmai',
        lastMsg:'My last message',
        date: '18/06/21',
      },
    ];
  }

  ngOnInit() {
  }

  goBack(){
    // this.location.back();
    this.router.navigate([`tabs`]);
  }

  goChat(){
    this.router.navigate([`chat/one-chat`]);
  }

}
