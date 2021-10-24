import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  formObj = {
    name: '',
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

  create() {
    if (this.formObj.email === '' || this.formObj.name === '' || this.formObj.password === '') {
      this.presentToast('Please fill felds');
    } else {
      this.userSrv.register(this.formObj).subscribe((resp: any) => {
        if (resp.message === 'success') {
          localStorage.setItem('user', JSON.stringify(resp.data));
          this.dismiss();
          this.presentToast('Successfully Registered');
          this.router.navigate(['/tabs']);
        } else if (resp.message === 'Already Exist') {
          this.presentToast('Email is already exist');
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
