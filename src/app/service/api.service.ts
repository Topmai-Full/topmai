/* eslint-disable @typescript-eslint/naming-convention */
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: any = environment.baseUrl;
  userToken: any;
  empdata: any;
  selectedemp: any = {};
  cat_id: any;
  settinglists: any = [];
  cartData: any = {
    services: [],
    total: 0,
    totalDuration: 0,
    selDate: '',
    selDateslot: '',
    activeSlot: {},
    car_name: '',
    car_model: '',
    car_licence: '',
    car_id: '',
    togle_value: '',
    latitude: '',
    longitude: '',
    address: ''
  };
  settinglistdata: any = {
    company_name: '',
    company_address: '',
    admin_email: ''

  };
  selectedLanguage: '';
  location_id: any;
  appoinmentData: any = {};
  languageData: any = {};
  mapaddress: any = {};
  useraddress_pickup: '';
  useraddress_pickup55: any = [];
  user_pickup_address_db: '';
  latitude: '';
  longitude: '';
  latit2: '';
  longit2: '';
  distance: any;
  category_img: '';
  fb_photo: '';
  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(this.baseUrl + url);
  }
  postData(url, data) {
    return this.http.post(this.baseUrl + url, data);
  }
  getDataWithToken(url) {
    let header = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + this.userToken);
    header = header.set('Accept', 'application/json');
    return this.http.get(this.baseUrl + url, { headers: header });
  }

  postDataWithToken(url, data) {
    let header = new HttpHeaders();
    header = header.set('Authorization', 'Bearer ' + this.userToken);
    header = header.set('Accept', 'application/json');
    return this.http.post(this.baseUrl + url, data, { headers: header });
  }
}
