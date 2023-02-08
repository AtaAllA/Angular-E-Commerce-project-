import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';

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
    path : "register", 
    component : RegisterComponent
  },
{
  path : "login", 
  component : LoginComponent
  },


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
