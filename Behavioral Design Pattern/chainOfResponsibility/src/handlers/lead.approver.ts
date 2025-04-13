import { PurchaseRequest } from '../request/purchase.request';
import { PurchaseApprover } from './approver.abstract';

export class TeamLead extends PurchaseApprover {
  protected canHandle(request: PurchaseRequest): boolean {
    return request.getAmount() <= 100;
  }

  protected handleRequest(request: PurchaseRequest): void {
    console.log(
      `Team Lead approved $${request.getAmount()} for ${request.getPurpose()}`
    );
  }

  protected getName(): string {
    return 'Team Lead';
  }
}
