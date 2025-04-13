import { PaymentStrategy } from '../interface/strategy.interface';

export class Checkout {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  processPayment(amount: number): string {
    return this.paymentStrategy.pay(amount);
  }
}
