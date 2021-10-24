import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  cartItems: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('products'));
    setInterval(() => {
      this.cartItems = JSON.parse(localStorage.getItem('products'));
    }, 1000);
  }

  gotoChat() {
    this.router.navigate([`chat`]);
  }

  gotoCarrito() {
    this.router.navigate([`favorites`]);
  }

}
