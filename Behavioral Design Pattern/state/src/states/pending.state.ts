import { Order } from '../context/order';
import { IState } from '../interface/state.iterface';
import { ProcessingState } from './processing.state';

export class PendingState implements IState {
  cancel(order: Order): void {
    console.log(`Order ${order.getStateName()} canceled`);
  }

  process(order: Order): void {
    console.log(`Processing order ${order.getStateName()}`);
    order.setState(new ProcessingState());
  }

  ship(order: Order): void {
    console.log(`Cannot ship a ${order.getStateName()} order`);
  }

  deliver(order: Order): void {
    console.log(`Cannot deliver a ${order.getStateName()} order`);
  }
}
