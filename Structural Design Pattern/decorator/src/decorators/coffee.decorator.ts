import { ICoffee } from '../interface/coffee.interface';

export abstract class CoffeeDecorator implements ICoffee {
  protected coffee: ICoffee;
  constructor(Coffee: ICoffee) {
    this.coffee = Coffee;
  }
  abstract getDescription(): string;
  abstract cost(): number;
}
