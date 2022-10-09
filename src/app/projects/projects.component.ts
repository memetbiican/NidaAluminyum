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

}
