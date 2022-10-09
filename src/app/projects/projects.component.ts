import { Component, OnInit } from '@angular/core';
import { SimpleDataSource_2 } from './Data-no-completed/datasource-2.model';
import { Product_2 } from './Data-no-completed/product-2.model';
import { ProductRepository_2 } from './Data-no-completed/repository-2.model';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  model_2:  ProductRepository_2= new ProductRepository_2();

  products: Product_2= this.model_2.getProductsByid_2(1)
  products_2: Product_2= this.model_2.getProductsByid_2(2)
  products_3: Product_2= this.model_2.getProductsByid_2(3)
  //Other Product
  products_4: Product_2= this.model_2.getProductsByid_2(4)
  products_5: Product_2= this.model_2.getProductsByid_2(5)
  products_6: Product_2= this.model_2.getProductsByid_2(6)
  //Other Product
  products_7: Product_2= this.model_2.getProductsByid_2(7)
  products_8: Product_2= this.model_2.getProductsByid_2(8)
  products_9: Product_2= this.model_2.getProductsByid_2(9)
  //Other Product
  products_10: Product_2= this.model_2.getProductsByid_2(10)
  products_11: Product_2= this.model_2.getProductsByid_2(11)
  products_12: Product_2= this.model_2.getProductsByid_2(12)

}
