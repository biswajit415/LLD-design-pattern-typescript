import { StockObserver } from './observer.interface';

export interface StockMarketSubject {
  registerObserver(observer: StockObserver): void;
  removeObserver(observer: StockObserver): void;
  notifyObservers(stockSymbol: string): void;
}
