import { PaymentStrategy } from '../interface/strategy.interface';

export class CryptoPayment implements PaymentStrategy {
  private walletAddress: string;

  constructor(walletAddress: string) {
    this.walletAddress = walletAddress;
  }

  pay(amount: number): string {
    return `Paid $${amount} with Crypto to ${this.walletAddress.slice(
      0,
      10
    )}...`;
  }
}
