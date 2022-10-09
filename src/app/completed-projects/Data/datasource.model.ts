import { Product } from './product.model';

export class SimpleDataSource {
  private products: Product[];

  constructor() {
    this.products = new Array<Product>(
      new Product(1, 'Regnum Escana Bodrum', '', '../assets/Completed-Projects/Regnum.jpg'),
      new Product(2, '', '', '../assets/Completed-Projects/Regnum-2.jpg'),
      new Product(3, '', '', '../assets/Completed-Projects/Regnum-3.jpg'),
      // other project
      new Product(4, 'MARTI La Perla Hotel Marmaris', '', '../assets/Completed-Projects/Marti-la.jpg'),
      new Product(5, '', '', '../assets/Completed-Projects/marti-la-2.jpg'),
      new Product(6, '', '', '../assets/Completed-Projects/marti-la-3.jpg'),
      // other project
      new Product(7, 'Manastır Hotel Bodrum', '', '../assets/Completed-Projects/manastır.jpg'),
      new Product(8, '', '', '../assets/Completed-Projects/manastır-2.jpg'),
      new Product(9, '', '', '../assets/Completed-Projects/manastır-3.jpg'),
      // other project
      new Product(10, 'Soul Of Bodrum', '', '../assets/Completed-Projects/Soul-Of-Bodrum.jpg'),
      new Product(11, '', '', '../assets/Completed-Projects/soul_of_bodrum-2.jpg'),
      new Product(12, '', '', '../assets/Completed-Projects/soul_of_bodrum-3.jpg'),
      // other project
      new Product(13, 'Herodot Beach Hotel Bodrum', '', '../assets/Completed-Projects/herodot-3.jpg'),
      new Product(14, '', '', '../assets/Completed-Projects/herodot.jpg'),
      new Product(15, '', '', '../assets/Completed-Projects/herodot-2.jpg'),
      // other project
      new Product(16, 'Salt Bodrum', '', '../assets/Completed-Projects/salt.jpg'),
      new Product(17, '', '', '../assets/Completed-Projects/salt-2.jpg'),
      new Product(18, '', '', '../assets/Completed-Projects/salt-3.jpg'),
      // other project
      new Product(19, 'LeReve Villas Bodrum', '', '../assets/Completed-Projects/lerev.jpg'),
      new Product(20, '', '', '../assets/Completed-Projects/lerev-2.jpg'),
      new Product(21, '', '', '../assets/Completed-Projects/lerev-3.jpg'),
      // other project
      new Product(22, 'İasos Dreams Bodrum', '', '../assets/Completed-Projects/iasos.jpg'),
      new Product(23, '', '', '../assets/Completed-Projects/iasos-2.jpg'),
      new Product(24, '', '', '../assets/Completed-Projects/iasos-3.jpg'),
    );
  }
  
  getProducts(): Product[] {
    return this.products;
  }


}
