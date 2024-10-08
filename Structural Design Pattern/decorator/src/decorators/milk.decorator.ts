import { CoffeeDecorator } from './coffee.decorator';

export class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.coffee.getDescription()}, Adding Milk`;
  }
  cost(): number {
    return this.coffee.cost() + 5;
  }
}
