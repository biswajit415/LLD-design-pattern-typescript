import { StockObserver } from '../interface/observer.interface';
import { StockMarketSubject } from '../interface/subject.interface';

export class StockExchange implements StockMarketSubject {
  private observers: StockObserver[] = [];
  private stockPrices: Record<string, number> = {};

  registerObserver(observer: StockObserver): void {
    this.observers.push(observer);
  }
  removeObserver(observer: StockObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyObservers(stockSymbol: string): void {
    this.observers.forEach((obs) => {
      obs.update(stockSymbol, this.stockPrices[stockSymbol]);
    });
  }

  setStockPrice(stockSymbol: string, price: number): void {
    this.stockPrices[stockSymbol] = price;
    this.notifyObservers(stockSymbol);
  }
}
