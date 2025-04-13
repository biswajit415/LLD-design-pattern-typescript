import { StockObserver } from '../interface/observer.interface';

/**
 * Investor observe stock market
 */
export class Investor implements StockObserver {
  constructor(private name: string) {}

  update(stockSymbol: string, price: number): void {
    console.log(`${this.name} notified: ${stockSymbol} -> ${price} $$`);
  }
}
