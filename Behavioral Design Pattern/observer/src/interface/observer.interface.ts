export interface StockObserver {
  update(stockSymbol: string, price: number): void;
}
