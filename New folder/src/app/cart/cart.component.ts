// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//   totalAmount=0;
//   user = new CartModel();
//   sum=0;
//    fr:any[];
//   getItems(){
//          let data = this.cartService.getItemsFromCart().subscribe(dat => {
//             this.user.items = dat.Item.Products.map(data =>
//               {
//                 return data; 
//               });
//                dat.Item.Products.forEach(data =>
//                {
             
//                 this.sum = this.sum + data.price;
//                 this.user.total = this.sum;
//                 return this.sum; 
//                });
//            });
//   }
//    deleteCart(index:number){
//       this.cartService.deleteFromCart(index).subscribe(dat => {
//       this.user.items = dat.Attributes.Products.map(data =>
//          {
//            return data; 
//          });
//          dat.Attributes.Products.forEach(data =>
//            {
         
//             this.sum = this.sum + data.price;
//             this.user.total = this.sum;
//             return this.sum; 
//            });
//    });
//  }
//  }

// }
