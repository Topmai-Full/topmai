import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  baseUrl = environment.baseUrl + '/shipping/';
  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post(this.baseUrl + 'create', data);
  }

  getAllByuser(id) {
    return this.http.get(this.baseUrl + 'getAllByuser/' + id);
  }

  getById(id) {
    return this.http.get(this.baseUrl + 'getById/' + id);
  }

  update(data) {
    return this.http.post(this.baseUrl + 'update', data);
  }

  delete(id) {
    return this.http.delete(this.baseUrl + 'delete/' + id);
  }

}
