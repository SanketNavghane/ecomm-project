import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
popularProduct:undefined|product[]
trendyProducts:undefined|product[]

 constructor(private product:ProductService){}

  ngOnInit(): void {
this.product.popularProduct().subscribe((data)=>{
  console.log(data);
  this.popularProduct=data;
});
this.product.trendyProducts().subscribe((data)=>{
this.trendyProducts=data;
})
  }

}
