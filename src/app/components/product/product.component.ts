import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() public product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
    description: '',
    category: ''
  }

  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}
