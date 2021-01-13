import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products: Array<any> = [
    {
      id: 1,
      name: 'Egg',
      category: 'Food',
      description: 'Lorem Food',
      price: 1,
    },
    {
      id: 2,
      name: 'Coca Cola',
      category: 'Drink',
      description: 'Lorem Drink',
      price: 1,
    },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.filter((product) => product.id === id);
  }
}
