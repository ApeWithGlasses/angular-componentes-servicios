import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProduct() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
