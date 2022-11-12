
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, PurchaseItem } from 'src/kitchenStory-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:Product[]=[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  addToCart(product:Product){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
     
  }
  getProduct(){
    return this.productList.asObservable();
    
  }
  getTotalPrice() :number{
    let grandTotal = 0;
    this.cartItemList.map((a:Product)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  resetCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
    this.getTotalPrice(); 
  }
}
