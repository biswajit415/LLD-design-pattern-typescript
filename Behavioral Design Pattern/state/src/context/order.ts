import { IState } from '../interface/state.iterface';
import { PendingState } from '../states/pending.state';

export class Order {
  private state: IState;
  private orderId: string;

  constructor(orderId: string) {
    this.orderId = orderId;
    this.state = new PendingState();
  }

  setState(state: IState): void {
    this.state = state;
    console.log(
      `Order ${this.orderId} state changed to ${this.getStateName()}`
    );
  }

  getStateName(): string {
    return this.state.constructor.name.replace('State', '');
  }

  cancel(): void {
    this.state.cancel(this);
  }
  process(): void {
    this.state.process(this);
  }
  ship(): void {
    this.state.ship(this);
  }
  deliver(): void {
    this.state.deliver(this);
  }
}
