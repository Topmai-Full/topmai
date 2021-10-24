import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ToastController} from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('mySlider')  slides: IonSlides;
  formObj = {
    email: '',
    password: '',
    role: 'user'
  };
  constructor(
    public modalController: ModalController,
    private userSrv: UserService,
    private toastController: ToastController,
    private router: Router
  ) { }

  async presentToast(title) {
    const toast = await this.toastController.create({
      message: title,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  logn() {
    console.log(this.formObj);
    if (this.formObj.email === '' || this.formObj.password === '') {
      this.presentToast('Please fill felds');
    } else {
      this.userSrv.signin(this.formObj).subscribe((resp: any) => {
        if (resp.message === 'success') {
          localStorage.setItem('user', JSON.stringify(resp.data));
          this.dismiss();
          this.presentToast('Successfully Registered');
          this.router.navigate(['/tabs']);
        } else if (resp.message === 'Un Authorized') {
          this.presentToast('Invalid credentials');
        } else {
          console.log('something went wrong');
        }
      });
    }
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
