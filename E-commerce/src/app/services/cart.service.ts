import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartData = new BehaviorSubject<Product[]>([]);
  cartList = this.cartData.asObservable();

  constructor() { }

  getCartItem(product : Product) {
    if ( ! this.cartData.value.find((pdct) => pdct.id == product.id) )
      this.cartData.next( this.cartData.getValue().concat([product]) );
  }

}