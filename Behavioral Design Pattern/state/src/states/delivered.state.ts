import { Order } from '../context/order';
import { IState } from '../interface/state.iterface';

export class DeliveredState implements IState {
  cancel(order: Order): void {
    console.log(`Cannot cancel a ${order.getStateName()} order`);
  }

  process(order: Order): void {
    console.log(`Cannot process a ${order.getStateName()} order`);
  }

  ship(order: Order): void {
    console.log(`Cannot ship a ${order.getStateName()} order`);
  }

  deliver(order: Order): void {
    console.log(`Order ${order.getStateName()} already delivered`);
  }
}
