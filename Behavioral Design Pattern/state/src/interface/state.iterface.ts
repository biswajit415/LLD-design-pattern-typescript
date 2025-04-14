import { Order } from '../context/order';

export interface IState {
  cancel(order: Order): void;
  process(order: Order): void;
  ship(order: Order): void;
  deliver(order: Order): void;
}
