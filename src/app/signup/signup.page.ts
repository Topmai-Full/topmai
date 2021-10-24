import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/api.service';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
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
        fd.append('user_name', this.user.user_name);
        fd.append('email', this.user.email);
        fd.append('password', this.user.password);
        fd.append('phone', this.user.phone);
        // fd.append('profile',this.profile);
        fd.append('mobile_token', this.user.mobile_token);
        this.api.postData('signup', fd).subscribe((res: any) => {
            this.util.dismissLoader();
            if (res.err) {
                this.util.presentToast("Error");
            } else {
                this.util.presentToast("Signup Successful!");
                this.nav.navigateRoot('/login');
            }
        });
  }

}
