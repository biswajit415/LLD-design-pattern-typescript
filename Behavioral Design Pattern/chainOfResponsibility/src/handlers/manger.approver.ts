import { PurchaseRequest } from '../request/purchase.request';
import { PurchaseApprover } from './approver.abstract';

export class Manager extends PurchaseApprover {
  protected canHandle(request: PurchaseRequest): boolean {
    return request.getAmount() <= 1000;
  }

  protected handleRequest(request: PurchaseRequest): void {
    console.log(
      `Manager approved $${request.getAmount()} for ${request.getPurpose()}`
    );
  }

  protected getName(): string {
    return 'Manager';
  }
}
