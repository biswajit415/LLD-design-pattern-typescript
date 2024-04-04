interface StockObservable {
  name: string;
  add(observer: NotificationObserver): void;
  remove(observer: NotificationObserver): void;
  notify(): void;
  setStockCount(count: number): void;
  getStockCount(): number;
}
