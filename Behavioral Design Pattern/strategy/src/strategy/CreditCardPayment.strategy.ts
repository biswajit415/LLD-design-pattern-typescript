import { PaymentStrategy } from '../interface/strategy.interface';

export class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number): string {
    return `Paid $${amount} with Credit Card ending in ${this.cardNumber.slice(
      -4
    )}`;
  }
}
