import { CoffeeDecorator } from './coffee.decorator';

export class SugarDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.coffee.getDescription()}, Adding Sugar`;
  }
  cost(): number {
    return this.coffee.cost() + 7;
  }
}
