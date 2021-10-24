import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-submit-stage',
  templateUrl: './submit-stage.page.html',
  styleUrls: ['./submit-stage.page.scss'],
})
export class SubmitStagePage implements OnInit {
  items;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHome(){
    this.router.navigate([`chat/chat-list`]);
  }

}
