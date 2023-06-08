import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  // Creamos myCart que es un BehaviorSubject del tipo array de productos y se inicializa en las parentesis como vacio
  private myCart = new BehaviorSubject<Product[]>([]);

  // Definimos a BehaviorSubjet myCart como un observable
  myCart$ = this.myCart.asObservable();

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    // Transmitimos el estado de la lista myShoppingCart
    this.myCart.next(this.myShoppingCart);
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }
}
