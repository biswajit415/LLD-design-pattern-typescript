import { ShipmentElement } from '../interface/element.interface';
import { ShipmentVisitor } from '../interface/visitor.interface';

export class StandardShipment implements ShipmentElement {
  private shipmentId: string;
  private status: string;

  constructor(shipmentId: string, status: string) {
    this.shipmentId = shipmentId;
    this.status = status;
  }

  getShipmentId(): string {
    return this.shipmentId;
  }
  getStatus(): string {
    return this.status;
  }

  accept(visitor: ShipmentVisitor): void {
    visitor.visitStandard(this);
  }
}
