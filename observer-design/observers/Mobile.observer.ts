export class MobileAlert implements NotificationObserver {
  constructor(private phone: string, private observable: StockObservable) {}
  public update(): void {
    this.sendPhoneMessage(
      this.phone,
      `Product Available ->  ${
        this.observable.name
      },  count: ${this.observable.getStockCount()} `
    );
  }

  public sendPhoneMessage(phone: string, msg: string): void {
    const emailObject = {
      To: phone,
      message: msg,
    };
    console.log(`Phone Message is sent`, JSON.stringify(emailObject));
  }
}
