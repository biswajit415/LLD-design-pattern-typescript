export class EmailAlert implements NotificationObserver {
  constructor(private email: string, private observable: StockObservable) {}

  public update(): void {
    this.sendEmail(
      this.email,
      `Product Available ->  ${
        this.observable.name
      }, count: ${this.observable.getStockCount()} `
    );
  }

  public sendEmail(email: string, msg: string): void {
    const emailObject = {
      To: email,
      message: msg,
    };
    console.log(`Email is sent`, JSON.stringify(emailObject));
  }
}
