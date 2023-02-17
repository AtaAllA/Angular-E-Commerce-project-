import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  counter = 0;

  productCounter = 0;

  @Input() product: Product = {
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  };

  constructor(
    // private router : Router,
    private counterService: CounterService,
    private sendProduct: CartService
  ) {}

  ngOnInit(): void {
    this.counterService.counterVal.subscribe((res) => (this.counter = res));
  }

  increaseCounter() {
    this.productCounter++;
    this.counterService.updateCounter(++this.counter);
  }

  decreaseCounter() {
    this.productCounter--;
    this.counterService.updateCounter(--this.counter);
  }

  addToCart() {
    this.sendProduct.getCartItem(this.product);
  }
}


//   constructor(private router : Router){

//   }
//   ngOnInit(): void {
    
//   }

//   redirectToDetails(){
//     this.router.navigate(['/product-details' , this.product.id])

//   }
// }
