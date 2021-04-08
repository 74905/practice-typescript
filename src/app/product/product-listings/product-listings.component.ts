import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/product';

@Component({
  selector: 'app-',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  product = products;
  products: any = [1,2,3,4]

  constructor() { }

  ngOnInit(): void {
  }

}
