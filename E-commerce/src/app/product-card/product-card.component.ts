import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product = {
    createdAt:"",
      name:"",
      image:"",
      rate:6,
      count:20,
      description:"",
      price:0,
      reviews:[
         ""
      ],
      id:0
    
  }

  constructor(private router : Router){

  }
  ngOnInit(): void {
    
  }

  redirectToDetails(){
    this.router.navigate(['/product-details' , this.product.id])

  }
}
