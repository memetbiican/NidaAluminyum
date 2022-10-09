import { SimpleDataSource } from './datasource.model';
import { Product } from './product.model';

export class ProductRepository {
  private datasource: SimpleDataSource;
  private products: Product[];

  constructor() {
    this.datasource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.datasource.getProducts().forEach((p) => this.products.push(p));
  }
  getproducts(): Product[] {
    return this.products;
  }

  getproductByid(id: number): Product|any{
    return this.products.find(p=> p.id == id);
  }

}
