import { CartService } from './../services/cart.service';
//import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/kitchenStory-api/src/services';
import { Product } from 'src/kitchenStory-api/src/models';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  imageSource:string="\src\assets\images\img1";
  searchText:string="";
  constructor(private productService:ProductsService,
    private cartService: CartService) {
    
     
     }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.findAll().subscribe(data=>{
      this.products=data;
    })
  }

  addToCart(product:any) {
 
    this.cartService.addToCart(product);

 
 
}
  filterProduct(event: any):void {

    if(this.searchText!='')
 this.products=this.products.filter(x => x.name?.includes( this.searchText));
 else {
   this.getProducts();
 }


  }
 




  
}
