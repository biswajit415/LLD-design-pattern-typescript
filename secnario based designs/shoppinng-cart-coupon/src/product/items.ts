import { Category } from './categories';
import { Product } from './product';

export class ElectronicItem extends Product {
  constructor(name: string, MRP: number) {
    super(name, MRP, Category.ELECTRONIC);
  }
  public getPrice(): number {
    return this.actualPrice;
  }
}

export class GroceryItem extends Product {
  constructor(name: string, MRP: number) {
    super(name, MRP, Category.GROCERY);
  }
  public getPrice(): number {
    return this.actualPrice;
  }
}
