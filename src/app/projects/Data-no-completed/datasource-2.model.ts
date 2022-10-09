import { Product_2 } from './product-2.model';

export class SimpleDataSource_2 {
  private products_2: Product_2[];

  constructor() {
    this.products_2 = new Array<Product_2>(
        new Product_2(1, 'The BO Viera Bodrum', '', '../assets/Ongoing-projects/boviera.jpg'),
        new Product_2(2, '', '', '../assets/Ongoing-projects/boviera-2.jpg'),
        new Product_2(3, '', '', '../assets/Ongoing-projects/boviera-3.jpg'),
        //Other Product
        new Product_2(4, 'Regnum Golf Country Bodrum', '', '../assets/Ongoing-projects/golf.jpg'),
        new Product_2(5, '', '', '../assets/Ongoing-projects/golf-2.jpg'),
        new Product_2(6, '', '', '../assets/Ongoing-projects/golf-3.jpg'),
        //Other Product
        new Product_2(7, 'Pier Çeşme', '', '../assets/Ongoing-projects/pier.jpg'),
        new Product_2(8, '', '', '../assets/Ongoing-projects/pier-2.jpg'),
        new Product_2(9, '', '', '../assets/Ongoing-projects/pier-3.jpg'),
        //Other Product
        new Product_2(10, 'Seba | Gölköy ', '', '../assets/Ongoing-projects/seba.jpg'),
        new Product_2(11, '', '', '../assets/Ongoing-projects/seba-2.jpg'),
        new Product_2(12, '', '', '../assets/Ongoing-projects/seba-3.jpg'),
        
    );


  }
  getProducts_2(): Product_2[] {
    return this.products_2;
  }
}
