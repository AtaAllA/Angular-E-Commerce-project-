import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private products: Product[] = [];

  selected: Product = {
    id: '',
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  };

  id = '0';

  constructor(
    private route: ActivatedRoute,
    private productsList: ProductsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.productsList.getProductById(this.id).subscribe((res) => {

      console.log(this.selected);
    });
  }
}