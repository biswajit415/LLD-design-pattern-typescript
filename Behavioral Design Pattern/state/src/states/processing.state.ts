import { Order } from '../context/order';
import { IState } from '../interface/state.iterface';
import { ShippedState } from './shipped.state';

export class ProcessingState implements IState {
  cancel(order: Order): void {
    console.log(`Cannot cancel a ${order.getStateName()} order`);
  }

  process(order: Order): void {
    console.log(`Order ${order.getStateName()} already processing`);
  }

  ship(order: Order): void {
    console.log(`Shipping order ${order.getStateName()}`);
    order.setState(new ShippedState());
  }

  deliver(order: Order): void {
    console.log(`Cannot deliver a ${order.getStateName()} order`);
  }
}
