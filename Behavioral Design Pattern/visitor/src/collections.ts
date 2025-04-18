import { ShipmentElement } from './interface/element.interface';
import { ShipmentVisitor } from './interface/visitor.interface';

export class ShipmentCollection {
  private shipments: ShipmentElement[] = [];

  addShipment(shipment: ShipmentElement): void {
    this.shipments.push(shipment);
  }

  accept(visitor: ShipmentVisitor): void {
    this.shipments.forEach((shipment) => shipment.accept(visitor));
  }
}
