import { ExpressShipment } from '../elements/express';
import { StandardShipment } from '../elements/standard';
import { ShipmentVisitor } from '../interface/visitor.interface';

export class CostReportVisitor implements ShipmentVisitor {
  visitStandard(shipment: StandardShipment): void {
    console.log(
      `Cost Report: Shipment ${shipment.getShipmentId()} - Cost: $10 (Standard)`
    );
  }

  visitExpress(shipment: ExpressShipment): void {
    console.log(
      `Cost Report: Shipment ${shipment.getShipmentId()} - Cost: $${shipment.getCost()}`
    );
  }
}
