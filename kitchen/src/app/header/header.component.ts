
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, Product,Purchase, PurchaseItem } from 'src/kitchenStory-api/src/models';
import { CustomersService, PurchasesService } from 'src/kitchenStory-api/src/services';
import { CartService } from '../services/cart.service';
//import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  login : number;
  public cartItemList:Product[]=[]
  public totalItem:number=0;
  public totalPrice:number=0;
  user :Customer;
  constructor(private customerService:CustomersService,private cartService:CartService, private purchaseService: PurchasesService,private router: Router) {
    this.login=0;
    this.user={
      "email":""
    };
    
   }

  ngOnInit(): void {
   
   
    this.cartService.getProduct().subscribe(res=>
      {
      this.totalItem=res.length;
      this.cartItemList=res;
      this.totalPrice=this.cartService.getTotalPrice();
    })
    
 
 
 
}
  
  public signIn():void {
    console.log("signIn:"+this.user.email);
    this.customerService.findByEmail(this.user.email).subscribe(
      data =>{
        if(data!=null){
          this.login=1;
          this.user=data;
        }
      }
    )
    this.cartService.resetCart();

  }
  public signup() {
   
    this.customerService.save(this.user).subscribe(
      res=>{
        
         
          this.user=res;
          this.login=1;
          this.router.navigate(['/products']);

        
     
      
          
          

          

        }
      
    )
 

  }
  public logout() {
   
    this.login=0;
    this.cartService.resetCart();
    
       
      
    

  }
  
  public purchase():void{
    let newPurchase:Purchase={};
    newPurchase.customer=this.user;
    let currentDate = new Date();
    newPurchase.dateOfPurchase=currentDate.toISOString();
    newPurchase.totalcost=this.totalPrice;
    newPurchase.purchaseItems=[];
    for(let p of this.cartItemList ){
      let purchaseItem:PurchaseItem={};
      purchaseItem.product=p;
      purchaseItem.quantity=1;
      newPurchase.purchaseItems.push(purchaseItem);
    }
    this.purchaseService.save(newPurchase).subscribe(res =>{
      
    })
    this.cartService.resetCart();
  }
  reset(){
    this.cartService.resetCart();
  }
}




