import { PurchaseRequest } from '../request/purchase.request';
import { Approver } from './../interface/approver.interface';

/**
 * @description  Implements chain logic, Delegates specific approval logic to concrete classes via abstract methods
 */
export abstract class PurchaseApprover implements Approver {
  private nextApprover: Approver | null = null;

  setNext(approver: Approver): void {
    this.nextApprover = approver;
  }

  processRequest(request: PurchaseRequest): void {
    if (this.canHandle(request)) {
      this.handleRequest(request);
    } else if (this.nextApprover) {
      console.log(`${this.getName()} cannot approve. Passing to next...`);
      this.nextApprover.processRequest(request);
    } else {
      console.log(
        `No one can approve the request for $${request.getAmount()} - ${request.getPurpose()}`
      );
    }
  }
  protected abstract canHandle(request: PurchaseRequest): boolean;
  protected abstract handleRequest(request: PurchaseRequest): void;
  protected abstract getName(): string;
}
