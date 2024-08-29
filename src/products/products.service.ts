// src/products/products.service.ts
import { Injectable } from '@nestjs/common';

import { DatabaseService } from '../database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}
  private products = [{
    id: 1
  },{id:2}]; // Esta es una simulación; en la realidad, usarías una base de datos

  async findAll() {
    try {
      const data = await this.databaseService.query('SELECT * FROM products');
      return data;
    } catch (err) {
      console.error('Error fetching data:', err);
      throw err;
    }
    return this.products;
  }

  findOne(id: number) {
    return this.products.find(product => product.id === id);
  }

  create(product: any) {
    this.products.push(product);
    return product;
  }

  update(id: number, updatedProduct: any) {
    const index = this.products.findIndex(product => product.id === id);
    if (index > -1) {
      this.products[index] = updatedProduct;
      return updatedProduct;
    }
    return null;
  }

  remove(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index > -1) {
      return this.products.splice(index, 1);
    }
    return null;
  }
}
