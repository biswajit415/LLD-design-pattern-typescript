import { MilkDecorator } from './src/decorators/milk.decorator';
import { SugarDecorator } from './src/decorators/sugar.decorator';
import { ICoffee } from './src/interface/coffee.interface';

class BasicCoffee implements ICoffee {
  getDescription(): string {
    return `Basic Coffee`;
  }
  cost(): number {
    return 17;
  }
}

let myCoffee = new BasicCoffee();

//adding sugar
myCoffee = new SugarDecorator(myCoffee);

//adding Milk
myCoffee = new MilkDecorator(myCoffee);

console.log(`Cost of Coffee: `, myCoffee.cost());
console.log(`Details of Coffee: `, myCoffee.getDescription());
