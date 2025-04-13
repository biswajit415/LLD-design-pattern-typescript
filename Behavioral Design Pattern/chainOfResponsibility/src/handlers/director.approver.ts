import { PurchaseRequest } from '../request/purchase.request';
import { PurchaseApprover } from './approver.abstract';

export class Director extends PurchaseApprover {
  protected canHandle(request: PurchaseRequest): boolean {
    return true;
  }

  protected handleRequest(request: PurchaseRequest): void {
    console.log(
      `Director approved $${request.getAmount()} for ${request.getPurpose()}`
    );
  }

  protected getName(): string {
    return 'Director';
  }
}
