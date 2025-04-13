import { PaymentStrategy } from '../interface/strategy.interface';

export class PayPalPayment implements PaymentStrategy {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  pay(amount: number): string {
    return `Paid $${amount} via PayPal for ${this.email}`;
  }
}
