import { Product_2 } from './product-2.model';

export class SimpleDataSource_2 {
  private products_2: Product_2[];

  constructor() {
    this.products_2 = new Array<Product_2>(
        new Product_2(1, 'İasos Dreams Bodrum', '', '../assets/Completed-Projects/iasos.jpg'),
        new Product_2(2, '', '', '../assets/Completed-Projects/iasos-2.jpg'),
        new Product_2(3, '', '', '../assets/Completed-Projects/iasos-3.jpg'),
    );


  }
  getProducts_2(): Product_2[] {
    return this.products_2;
  }
}
