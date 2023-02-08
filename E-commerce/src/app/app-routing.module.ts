import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path : "", 
    component : ProductListComponent
  }, 
  {
    path : "about-us", 
    component : AboutUsComponent
  },
  {
    path : "add-product", 
    component : AddProductComponent
  } , 
  {
    path : "product-details/:id", 
    component : ProductDetailsComponent
  } , 

  {
    path : "**" , 
    component : NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
