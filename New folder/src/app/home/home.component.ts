import { Component, OnInit } from '@angular/core';
import {HomeModel} from './model/home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{


  constructor(){}
  ngOnInit(): void {
   this.postToFrontEnd();
  }

  home = new HomeModel();

 clickFunction(name: string, cata:string, url:string, price:number){
  let product={name : name, category: cata, imageUrl:url, price:price, id: 'murugesan@gmail.com'}
        // this.service.addToCart(product);
 }

 postToFrontEnd(){
  this.home.items = [{Name:' Vegetable Combo',description:'It consists of combo of carrot, tomato, mushroom.', imageUrl : 'https://live.staticflickr.com/3256/2488644619_481cbcce65_b.jpg',Catagory:'Fruits', Price:56 },
                     {Name:'Plums',description:'A sweety plumbs from ooty. Try once', imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJJoo4Jv_6422avtaswAg-5YtXozH0RVwwng&usqp=CAU',Catagory:'Fruits', Price:56},
                     {Name:'Fruits combo',description:'It consits of a fruit combo. Healthy Combo', imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMAqPb0PLC7d0URATsV_EJNMmHBENIv8q3Rg&usqp=CAU',Catagory:'Fruits', Price:56},
                     {Name:'Stawberry',description:'The tasty Kashmir stawberry. Delicious with sweet taste.', imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRObKg4BhiAArHZjT9h0IbxBPVOliny1KnVkg&usqp=CAU',Catagory:'Fruits', Price:56},
                     {Name:'Grapes',description:'A tasty Grapes from hill station', imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYpcr-r5bdJ_qX8Qex0oSbsnObW8PLbbrk7Q&usqp=CAU',Catagory:'Fruits', Price:56 },
                     {Name:'Fruits Combo',description:'Fruit combo. Value for money', imageUrl : 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX7002407.jpg',Catagory:'Fruits', Price:56 },
                    ];
 }

}
