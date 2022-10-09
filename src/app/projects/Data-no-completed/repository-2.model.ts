import { Product_2 } from './product-2.model';
import { SimpleDataSource_2 } from './datasource-2.model';

export class ProductRepository_2 {
  private datasource_2: SimpleDataSource_2;
  private product_2: Product_2[];

  constructor() {
    this.datasource_2 = new SimpleDataSource_2();
    this.product_2 = new Array<Product_2>();
    this.datasource_2
      .getProducts_2()
      .forEach((p: any) => this.product_2.push(p));
  }

  getProducts_2(): Product_2[] | any {
    return this.product_2;
  }

  getProductsByid_2(id: number): Product_2 | any {
    return this.product_2.find((p) => p.id == id);
  }
}
