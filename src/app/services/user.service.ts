import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl + '/user/';
  constructor(private http: HttpClient) { }

  register(data) {
    return this.http.post(this.baseUrl + 'createUser' , data);
  }

  signin(data) {
    return this.http.post(this.baseUrl + 'signinUser', data);
  }
}
