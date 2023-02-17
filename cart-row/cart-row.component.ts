import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.css']
})
export class CartRowComponent {
  @Input() item : Product = {
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  };

  counter = 0;

  @Output() outCounter = new EventEmitter();

  constructor(private counterService : CounterService) {}

  sendToParent() {
    this.outCounter.emit(this.counter);
  }

  increaseCounter() {
    this.counter++;
    this.counterService.updateCounter(++this.counter);
  }

  decreaseCounter() {
    this.counter--;
    this.counterService.updateCounter(--this.counter);
  }

}