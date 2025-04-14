import { Order } from '../context/order';
import { IState } from '../interface/state.iterface';
import { DeliveredState } from './delivered.state';

export class ShippedState implements IState {
  cancel(order: Order): void {
    console.log(`Cannot cancel a ${order.getStateName()} order`);
  }

  process(order: Order): void {
    console.log(`Cannot process a ${order.getStateName()} order`);
  }

  ship(order: Order): void {
    console.log(`Order ${order.getStateName()} already shipped`);
  }

  deliver(order: Order): void {
    console.log(`Delivering order ${order.getStateName()}`);
    order.setState(new DeliveredState());
  }
}
