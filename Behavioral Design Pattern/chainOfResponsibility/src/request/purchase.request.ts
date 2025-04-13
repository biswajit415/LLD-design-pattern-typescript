/**
 * @description Represents a purchase request with an amount and purpose
 */
export class PurchaseRequest {
  private amount: number;
  private purpose: string;

  constructor(amount: number, purpose: string) {
    this.amount = amount;
    this.purpose = purpose;
  }

  getAmount(): number {
    return this.amount;
  }
  getPurpose(): string {
    return this.purpose;
  }
}
