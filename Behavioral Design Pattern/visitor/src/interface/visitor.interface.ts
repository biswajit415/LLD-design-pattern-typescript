import { ExpressShipment } from '../elements/express';
import { StandardShipment } from '../elements/standard';

export interface ShipmentVisitor {
  visitStandard(shipment: StandardShipment): void;
  visitExpress(shipment: ExpressShipment): void;
}
