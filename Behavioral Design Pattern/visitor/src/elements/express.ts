import { ShipmentElement } from '../interface/element.interface';
import { ShipmentVisitor } from '../interface/visitor.interface';

export class ExpressShipment implements ShipmentElement {
  private shipmentId: string;
  private cost: number;

  constructor(shipmentId: string, cost: number) {
    this.shipmentId = shipmentId;
    this.cost = cost;
  }
  getShipmentId(): string {
    return this.shipmentId;
  }
  getCost(): number {
    return this.cost;
  }

  accept(visitor: ShipmentVisitor): void {
    visitor.visitExpress(this);
  }
}
