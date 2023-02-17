import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
//   productList: Array<Product> = [
//     {
//       "createdAt":"2022-09-30T02:45:19.349Z",
//       "name":"Mayonnaise Png, Transparent Png - kindpng",
//       "image":"https://www.kindpng.com/picc/m/374-3744320_mayonnaise-png-transparent-png.png",
//       "rate":6,
//       "count":20,
//       "description":"Product description goes here",
//       "price":198.00,
//       "reviews":[
//          "Great one"
//       ],
//       "id":2
//     } , 
    
//     {
      
//       "createdAt":"2022-09-30T02:45:19.349Z",
//       "name":"Mayonnaise Png, Transparent Png - kindpng",
//       "image":"https://www.kindpng.com/picc/m/374-3744320_mayonnaise-png-transparent-png.png",
//       "rate":6,
//       "count":20,
//       "description":"Product description goes here",
//       "price":198.00,
//       "reviews":[
//          "Great one"
//       ],
//       "id":2
//     },
//     {
//       "createdAt":"2022-09-30T07:21:14.130Z",
//       "name":"Muesli Fitness (500g)",
//       "image":"https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/04/01.jpg",
//       "description":"Muesli Fitness Nutritious Energy, Gluten Free (500g) – Grocery Store",
//       "rate":9,
//       "count":10,
//       "price":828.00,
//       "reviews":[
//          "reviews 3"
//       ],
//       "id":3
//    },
//    {
//     "createdAt":"2022-09-30T02:32:29.522Z",
//     "name":"Al Doha Egyptian Rice-5 kg",
//     "image":"https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/04/01.jpg",
//     "description":"Refined",
//     "rate":6.5,
//     "count":25,
//     "price":929.00,
//     "reviews":[
//        "reviews 4"
//     ],
//     "id":4
//  },
    
//  {
//   "createdAt":"2022-09-30T03:09:25.056Z",
//   "name":"23 Black-Owned",
//   "image":"https://cdn.apartmenttherapy.info/image/upload/v1597243598/k/Design/k-essentials-grocery-2020/photos/Morton-Z/Zach_Zoe-Wildflower-Jar-Front-HighRes.png",
//   "description":"Unbranded",
//   "rate":5,
//   "count":0,
//   "price":85.00,
//   "reviews":[
//      "reviews 5"
//   ],
//   "id":5
// },
// {
//   "createdAt":"2022-09-30T11:57:53.372Z",
//   "name":"Tomato Ketckup",
//   "image":"https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/heinz-tomato-ketchup.jpg",
//   "rate":2.5,
//   "count":60,
//   "description":"Sleek",
//   "price":638.00,
//   "reviews":[
//      "reviews 6"
//   ],
//   "id":6
// }
// ]

productList = []


  

  constructor(private productService : ProductsService){
  

  }
  ngOnInit(): void {
this.productService.getProductsList().subscribe((res) => {
  // this.productList = res;
});
  }

}
