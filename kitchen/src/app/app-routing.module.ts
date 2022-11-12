import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
 { path:'',redirectTo:'products',pathMatch:'full'},
  {path: 'products',component : ProductsComponent },
  
  {path: 'header',component :HeaderComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
