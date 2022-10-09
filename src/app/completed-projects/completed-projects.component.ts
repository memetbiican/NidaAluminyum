import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SimpleDataSource } from './Data/datasource.model';
import { Product } from './Data/product.model';
import { ProductRepository } from './Data/repository.model';
@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.css'],
})
export class CompletedProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  model: ProductRepository = new ProductRepository();

  product: Product = this.model.getproductByid(1);
  product_2: Product = this.model.getproductByid(2);
  product_3: Product = this.model.getproductByid(3);
  // other product
  product_4: Product = this.model.getproductByid(4);
  product_5: Product = this.model.getproductByid(5);
  product_6: Product = this.model.getproductByid(6);
  // other product
  product_7: Product = this.model.getproductByid(7);
  product_8: Product = this.model.getproductByid(8);
  product_9: Product = this.model.getproductByid(9);
  // other product
  product_10: Product = this.model.getproductByid(10);
  product_11: Product = this.model.getproductByid(11);
  product_12: Product = this.model.getproductByid(12);
  // other product
  product_13: Product = this.model.getproductByid(13);
  product_14: Product = this.model.getproductByid(14);
  product_15: Product = this.model.getproductByid(15);
  // other product
  product_16: Product = this.model.getproductByid(16);
  product_17: Product = this.model.getproductByid(17);
  product_18: Product = this.model.getproductByid(18);
  // other product
  product_19: Product = this.model.getproductByid(19);
  product_20: Product = this.model.getproductByid(20);
  product_21: Product = this.model.getproductByid(21);
  // other product
  product_22: Product = this.model.getproductByid(22);
  product_23: Product = this.model.getproductByid(23);
  product_24: Product = this.model.getproductByid(24);
}
