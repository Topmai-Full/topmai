import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  baseUrl = environment.baseUrl + '/order/';

  constructor(private http: HttpClient) { }

  getAll(userid) {
    return this.http.get(this.baseUrl + 'getAllByuser/' + userid);
  }

  create(date) {
    return this.http.post(this.baseUrl + 'create', date);
  }

}
