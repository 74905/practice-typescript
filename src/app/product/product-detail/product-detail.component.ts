import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product
  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.product = this.productService.getProductsById(params.get('productId'))

      const productsObservable = this.productService.getProductsById(params.get('productId'))

      productsObservable.subscribe(
        (data) => {
          this.product = data
          console.log('次のデータが出力 ' + data);
         },
        (err) => {console.error('次のエラーが発生しました' + err);}
      )
    })
  }

}
