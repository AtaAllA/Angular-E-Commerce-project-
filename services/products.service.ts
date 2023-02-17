import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http  :HttpClient) { }

  getProductsList(){
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductsDetails(){
    return this.http.get(`${environment.baseURL} Product Details : https://fakestoreapi.com/products/id`)
  }


  getProductById(id : any) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}  
