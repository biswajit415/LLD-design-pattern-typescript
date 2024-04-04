export class SamsungStockObservable implements StockObservable {
  public observerList: NotificationObserver[] = [];
  public stockCount = 0;
  name = 'samsung';

  public add(observer: NotificationObserver): void {
    this.observerList.push(observer);
    console.log('New Observer added for', this.name);
  }
  public remove(observer: NotificationObserver): void {
    const observerIndex = this.observerList.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observerList.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  public notify(): void {
    for (const x of this.observerList) {
      x.update();
    }
  }

  public setStockCount(count: number) {
    console.log(this.name, 'Old stock', this.stockCount);
    if (this.stockCount === 0) {
      this.stockCount += count;
      console.log(this.name, 'current stock', this.stockCount);
      this.notify();
    } else {
      this.stockCount += count;
    }
  }

  public getStockCount(): number {
    return this.stockCount;
  }
}
