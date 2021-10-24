import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/api.service';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:any={mobile_token: 'abcdef'};
  constructor(
    private nav: NavController,
    private api: ApiService,
    private util: UtilService,
  ) {          
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val); 
  }

  ngOnInit() {
  }

  onSubmit(){
    this.util.startLoad();
    const fd = new FormData();
    fd.append('username', this.user.email);
    fd.append('password', this.user.password);
    fd.append('mobile_token', this.user.mobile_token);
    this.api.postData('login', fd).subscribe((res: any) => {
        this.util.dismissLoader();
        if (res.err) {
            this.util.presentToast("Error");
        } else {
            this.util.presentToast("Login Successfull");
            localStorage.setItem('uid', res.data);
            setTimeout(()=>{
              this.nav.navigateRoot('/tabs');
            },2000);
        }
    });
  }

}
