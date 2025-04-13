import { PurchaseRequest } from '../request/purchase.request';

export interface Approver {
  setNext(approver: Approver): void;
  processRequest(request: PurchaseRequest): void;
}
