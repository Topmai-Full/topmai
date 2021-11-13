import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl + '/product/';

  constructor(private http: HttpClient) { }

  getById(id) {
    return this.http.get(this.baseUrl + 'getById/' + id);
  }

  getAll() {
    return this.http.get(this.baseUrl + 'getAll');
  }

  getAllByParentcategory(id) {
    return this.http.get(this.baseUrl + 'getAllBy_parentcategory/'+id);
  }

  getAllBychildcategory(id) {
    return this.http.get(this.baseUrl + 'getAllBy_childcategory/' + id);
  }


  findCartProducts(data) {
    return this.http.post(this.baseUrl + 'findCart_products', data);
  }

}
